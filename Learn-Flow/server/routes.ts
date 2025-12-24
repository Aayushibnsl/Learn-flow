import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.resources.list.path, async (req, res) => {
    // Public endpoint - show resources to everyone
    const resources = await storage.getResources();
    res.json(resources);
  });

  // Seed data if empty, and fix URLs
  await seedDatabase();
  await fixResourceUrls();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getResources();
  if (existing.length === 0) {
    await storage.createResource({
      title: "Web3 From Zero — Cohort-Style Roadmap",
      description: "A 16-week, fundamentals-first roadmap covering blockchain basics, Ethereum, smart contracts, security, DeFi, NFTs, and real-world assets.",
      url: "/pdfs/web3-roadmap.pdf",
      category: "Blockchain",
    });
  }
}

async function fixResourceUrls() {
  const resources = await storage.getResources();
  for (const resource of resources) {
    if (resource.title.includes("Web3") && resource.url === "#") {
      await storage.updateResource(resource.id, { url: "/pdfs/web3-roadmap.pdf" });
    }
  }
}
