/*
  se criares um arquivo que não seja uma rota insira-o no filter
*/

import { readdirSync } from 'fs';

import path from 'path';

export default (app) => {
  readdirSync(__dirname)

  // vou procurar por todos os meus arquivos dentro desse diretorio
  // que não começam com dot (ponto, ".")
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.ts')

  // agora vou pegar todos os arquivos que sobraram dessa filtragem
  // e repassar o app nele
    .forEach((file) => {
      import(path.resolve(__dirname, file)).then((module) => module.default(app));
    });
};

// import(path.resolve(__dirname, file)).then((module) => console.log(module.default))
// require(path.resolve(__dirname, file));

// import glob from 'glob';

// export default glob
//   .sync(__dirname)
//   .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
//   .forEach((file) => require(file));
