import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  
  // Lista blanca de dominios permitidos (CORS)
  // En producción, esto debería coincidir con tu dominio final
  const allowedOrigins = [
    'https://labs24kfranquicias.com',
    'https://www.labs24kfranquicias.com',
    'http://localhost:3000' // Para desarrollo
  ];

  // Configuración de respuesta
  const response = NextResponse.next();

  // Si hay un origen y no está en la lista blanca, bloqueamos (CORS estricto)
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 403,
      statusText: 'Forbidden (CORS)',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  // Añadir headers de seguridad adicionales por si el servidor no los procesa
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }
  
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
