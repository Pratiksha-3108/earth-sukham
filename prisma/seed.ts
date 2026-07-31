import { PrismaClient } from '@prisma/client';
import { PROJECTS_DATA, LOCATIONS_DATA } from '../src/data/mockData.js';

const prisma = new PrismaClient();

export async function seedDatabase() {
  try {
    const projectCount = await prisma.project.count();
    if (projectCount === 0) {
      console.log('[Prisma] Seeding initial projects into SQLite database...');
      for (const p of PROJECTS_DATA) {
        await prisma.project.create({
          data: {
            id: p.id,
            name: p.name,
            location: p.location,
            city: p.city,
            typology: p.typology,
            priceRange: p.priceRange,
            status: p.status,
            category: p.category || 'Residences & Townships',
            image: p.image,
            featured: p.featured || false,
            newLaunch: p.newLaunch || false,
            rera: (p as any).RERA || null,
          }
        });
      }
      console.log(`[Prisma] Seeded ${PROJECTS_DATA.length} projects successfully.`);
    }

    const locationCount = await prisma.location.count();
    if (locationCount === 0) {
      console.log('[Prisma] Seeding initial locations...');
      for (const loc of LOCATIONS_DATA) {
        await prisma.location.create({
          data: {
            id: loc.id,
            name: loc.name,
            city: loc.city,
            projectCount: loc.projectCount,
            image: loc.image || null,
          }
        });
      }
      console.log(`[Prisma] Seeded ${LOCATIONS_DATA.length} locations successfully.`);
    }
  } catch (err) {
    console.error('[Prisma] Seed error:', err);
  }
}
