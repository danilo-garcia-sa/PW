const productos = [
  { id: 1, nombre: "Auriculares Bluetooth",  categoria: "Electrónica", precio: 15000, stock: 8,  activo: true  },
  { id: 2, nombre: "Teclado Mecánico",       categoria: "Electrónica", precio: 22000, stock: 0,  activo: true  },
  { id: 3, nombre: "Silla Ergonómica",       categoria: "Muebles",     precio: 85000, stock: 3,  activo: true  },
  { id: 4, nombre: "Lámpara de Escritorio",  categoria: "Muebles",     precio: 9500,  stock: 12, activo: false },
  { id: 5, nombre: "Mouse Inalámbrico",      categoria: "Electrónica", precio: 7800,  stock: 20, activo: true  },
  { id: 6, nombre: "Monitor 27\"",           categoria: "Electrónica", precio: 120000,stock: 2,  activo: true  },
  { id: 7, nombre: "Alfombra de Escritorio", categoria: "Muebles",     precio: 4200,  stock: 0,  activo: false },
  { id: 8, nombre: "Webcam HD",              categoria: "Electrónica", precio: 18000, stock: 5,  activo: true  },
];

const soloNombres = productos.map((p) => p.nombre);
console.log("Ej 1 - soloNombres:", soloNombres);

const preciosConIVA = productos.map((p) => ({
  nombre: p.nombre,
  precioFinal: Math.round(p.precio * 1.21),
}));
console.log("Ej 2 - preciosConIVA:", preciosConIVA);

const nombresMuebles = productos
  .filter((p) => p.categoria === "Muebles")
  .map((p) => p.nombre);
console.log("Ej 3 - nombresMuebles:", nombresMuebles);

const productoId6 = productos.find((p) => p.id === 6);
console.log(`Ej 4 - ${productoId6.nombre} — $${productoId6.precio}`);


const productoMouse = productos.find((p) => p.nombre.includes("Mouse"));
if (productoMouse) {
  console.log(`Ej 5 - Encontrado: ${productoMouse.nombre}`);
} else {
  console.log("Ej 5 - No encontrado");
}

const hayMasDe100mil = productos.some((p) => p.precio > 100000);
console.log("Ej 6 - ¿Hay algún producto con precio > $100.000?", hayMasDe100mil);

const todosTienenId = productos.every((p) => p.id !== undefined);
console.log("Ej 6 - ¿Todos los productos tienen id definido?", todosTienenId);

const hayInactivo = productos.some((p) => p.activo === false);
console.log("Ej 6 - ¿Hay algún producto inactivo?", hayInactivo);

const electronicaConStock = productos
  .filter((p) => p.categoria === "Electrónica")
  .every((p) => p.stock > 0);
console.log("Ej 6 - ¿Todos los de Electrónica tienen stock > 0?", electronicaConStock);


const valorInventarioConStock = productos
  .filter((p) => p.stock > 0)
  .reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log("Ej 7 - valorInventarioConStock:", valorInventarioConStock.toLocaleString("es-AR"));


const nombresFiltrados = productos
  .filter((p) => p.activo)
  .filter((p) => p.stock > 0)
  .filter((p) => p.precio < 20000)
  .map((p) => p.nombre);
console.log("Ej 8 - nombresFiltrados:", nombresFiltrados);


const porCategoriaActivos = productos
  .filter((p) => p.activo)
  .reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + 1;
    return acc;
  }, {});
console.log("Ej 9 - porCategoriaActivos:", porCategoriaActivos);


function resumirInventario(productos) {
  return productos.reduce(
    (acc, p) => {
      acc.total += 1;
      if (p.activo) acc.activos += 1;
      if (p.stock === 0) acc.sinStock += 1;
      acc.valorTotal += p.precio * p.stock;
      acc.categorias[p.categoria] = (acc.categorias[p.categoria] || 0) + 1;
      return acc;
    },
    { total: 0, activos: 0, sinStock: 0, valorTotal: 0, categorias: {} }
  );
}

console.log("Ej 10 - resumirInventario:", resumirInventario(productos));
