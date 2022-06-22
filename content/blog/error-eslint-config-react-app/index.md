---
title: "Error de conflicto con la librería ESLint en React y Visual Studio"
date: "2022-06-22"
description: "Se describe paso a paso cómo solucionar el error de conflicto con la librería ESLint en React y Visual Studio"
tags: ["ESLint", "React", "Visual Studio"]
---

Es posible que al crear una nueva aplicación en Visual Studio de React y lanzarla por primera vez, obtengas un mensaje de error de que existe un **conflicto con la librería ESLint**.


## Solución al Error "react" was conflicted between "package.json » eslint-config-react-app"  

Si observamos el las dos rutas que te ofrece el mensaje de error, podemos ver la sutil diferencia de que una **tendrá mayúsculas en las carpetas que comprenden la ruta y en la otra no**. 

Ese es el verdadero problema de la librería, que no lo considera como una misma ruta. 

Al menos, la solución es sencilla y es abrir en modo texto el archivo de tu solución (.sln) y editar esa ruta poniéndola en minúsculas. Si no puedes editarlo directamente desde Visual Studio, usa cualquier otro editor de texto.


## Que es ESLint

Para dar una pincelada de **para que sirve la librería ESLint**, podemos decir que forma parte de la integración continua de tu aplicación, analizando el código y solucionando pequeños problemas automáticamente.


## Conclusión

Como conclusión, el error parece bastante sencillo de solucionar, pero esperamos que una próxima actualización solucione el problema.

