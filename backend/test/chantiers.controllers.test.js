const request = require('supertest');
const app = require('../app.js'); // Importez l'application sans démarrer le serveur

describe('Chantier Controllers Tests', () => {
  // Test pour la route de santé
  it('GET /chantiers/healthy should return a healthy status', async () => {
    const response = await request(app).get('/chantiers/healthy');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('healthy categories');
  });

  
  // Test pour obtenir tous les chantiers
  it('GET /chantiers/ should return all chantiers', async () => {
    const response = await request(app).get('/chantiers/');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Vérifie si la réponse est un tableau
  });

  // Test pour créer un nouveau chantier
  it('POST /chantiers/ should create a new chantier', async () => {
    const newChantier = {
      title: 'Nouveau Chantier',
      image: 'test.jpg',
      format: 'format',
      h2: 'Heading',
      p: 'Paragraph',
      vue: 0,
      commentaire: [],
      like: []
    };

    const response = await request(app)
      .post('/chantiers/')
      .send(newChantier);
      
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'Nouveau Chantier');
  });

  // Ajoutez d'autres tests pour les autres routes
});
