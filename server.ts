import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { PROJECTS_DATA, LOCATIONS_DATA, DEVELOPERS_DATA, TESTIMONIALS_DATA, GALLERY_DATA, FAQS_DATA } from './src/data/mockData.js';
import { prisma } from './src/lib/prisma.js';
import { seedDatabase } from './prisma/seed.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Seed Prisma database on initial startup
  await seedDatabase();

  // API Routes
  app.get('/api/projects', async (req, res) => {
    try {
      const { status, city, location, query } = req.query;

      let dbProjects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
      });

      let filtered = [...dbProjects];

      if (status && typeof status === 'string' && status !== 'View All Projects' && status !== 'All') {
        filtered = filtered.filter(p => p.status === status);
      }

      if (city && typeof city === 'string') {
        filtered = filtered.filter(p => p.city.toLowerCase() === city.toLowerCase());
      }

      if (location && typeof location === 'string') {
        filtered = filtered.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
      }

      if (query && typeof query === 'string') {
        const q = query.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.location.toLowerCase().includes(q) ||
          p.typology.toLowerCase().includes(q)
        );
      }

      res.json({ success: true, count: filtered.length, data: filtered });
    } catch (err) {
      console.error('[Prisma GET /api/projects error]:', err);
      res.json({ success: true, count: PROJECTS_DATA.length, data: PROJECTS_DATA });
    }
  });

  app.get('/api/locations', async (req, res) => {
    try {
      const dbLocations = await prisma.location.findMany();
      res.json({ success: true, data: dbLocations.length > 0 ? dbLocations : LOCATIONS_DATA });
    } catch (err) {
      res.json({ success: true, data: LOCATIONS_DATA });
    }
  });

  app.get('/api/developers', (req, res) => {
    res.json({ success: true, data: DEVELOPERS_DATA });
  });

  app.get('/api/testimonials', (req, res) => {
    res.json({ success: true, data: TESTIMONIALS_DATA });
  });

  app.get('/api/gallery', (req, res) => {
    res.json({ success: true, data: GALLERY_DATA });
  });

  app.get('/api/faqs', (req, res) => {
    res.json({ success: true, data: FAQS_DATA });
  });

  // POST /api/enquiry - Persisted via Prisma
  app.post('/api/enquiry', async (req, res) => {
    const { project, name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, Email, and Phone number are required fields.' 
      });
    }

    try {
      const newEnquiry = await prisma.enquiry.create({
        data: {
          project: project || 'Godrej Township',
          name,
          email,
          phone,
          message: message || '',
        }
      });

      console.log('[Prisma] New Enquiry persisted to DB:', newEnquiry);

      res.status(201).json({
        success: true,
        message: 'Thank you for your enquiry! Our Earth Sukham property expert will contact you shortly.',
        data: newEnquiry
      });
    } catch (err) {
      console.error('[Prisma POST /api/enquiry error]:', err);
      res.status(500).json({ success: false, message: 'Failed to save enquiry.' });
    }
  });

  // POST /api/contact - Persisted via Prisma
  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and Email are required fields.' 
      });
    }

    try {
      const newContact = await prisma.contact.create({
        data: {
          name,
          email,
          phone: phone || '',
          message: message || '',
        }
      });

      console.log('[Prisma] New Contact persisted to DB:', newContact);

      res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
        data: newContact
      });
    } catch (err) {
      console.error('[Prisma POST /api/contact error]:', err);
      res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
  });

  // Vite Middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Earth Sukham server running on http://localhost:${PORT}`);
  });
}

startServer();
