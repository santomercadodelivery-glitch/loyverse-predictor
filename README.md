# Predictor de Demanda · Santo Mercado

App web conectada a Loyverse para predicción de demanda y sugerencia de pedidos.

## Deploy en Vercel (5 minutos)

### 1. Subir a GitHub
- Crea un repositorio nuevo en github.com (ej: `loyverse-predictor`)
- Sube todos estos archivos

### 2. Conectar con Vercel
- Entra a vercel.com e inicia sesión con tu cuenta de GitHub
- Click en "Add New Project"
- Selecciona el repositorio `loyverse-predictor`
- Click en "Deploy"

### 3. Configurar el token de Loyverse
- En Vercel, ve a tu proyecto → Settings → Environment Variables
- Agrega una variable:
  - **Name:** `LOYVERSE_TOKEN`
  - **Value:** tu token de API de Loyverse
- Click en "Save"
- Ve a Deployments → click en los 3 puntos del último deploy → "Redeploy"

### 4. Listo
Tu app estará disponible en `https://tu-proyecto.vercel.app`

## Funcionalidades (Fase 1)
- Conexión directa a Loyverse via API
- Predicción de demanda para los próximos 7 y 30 días
- Alertas de stock (rojo < 3 días, amarillo < 7 días)
- Filtro por producto o categoría
- Exportación CSV del pedido sugerido
- Funciona en celular y computador
