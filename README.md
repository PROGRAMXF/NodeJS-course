# NodeJS-course
Apuntes del curso de NodeJS


module.exports
La variable const tiene un string pero puede tener cualquier otra cosa.
![module](https://user-images.githubusercontent.com/113071685/202582972-c9031f0f-47b9-4115-9c8a-642972f4fcee.png)

require
Llamamos al valor exportado
![require](https://user-images.githubusercontent.com/113071685/202583303-0c452870-9103-468f-bd39-b8a0bc922e18.png)

module.exports para grupo de objetos
![export grupo de objetos](https://user-images.githubusercontent.com/113071685/202584842-c8593e87-59b9-4cbb-a4cf-c1f4de396fad.png)

module.exports para objetos individuales
![exportIndividual](https://user-images.githubusercontent.com/113071685/202875429-dd1f922d-0202-4d60-b002-baf6f08018c3.png)


leemos un archivo, lo creamos, escribimos dentro de el y ademas creamos contenido a traves de una variable
![1](https://user-images.githubusercontent.com/113071685/204102697-386a7d59-7a8a-4f8b-bf21-1637f91ce692.png)


instalando modulos de terceros con npm
![Sin título](https://user-images.githubusercontent.com/113071685/205508492-45f79647-3183-4c96-8452-d878a326e383.png)


instalando un proyecto con npm init y creando manualmente el package.json que nos da informacion de nuestro proyecto
![Sin título](https://user-images.githubusercontent.com/113071685/206056352-1c54e7a0-eb9a-4e54-b6e5-d3ffd0da15f4.png)


package.json listo
![Sin título1](https://user-images.githubusercontent.com/113071685/206056474-2e9b3560-ebc2-41ff-bd28-880a0999a2ab.png)


el script dentro del package.json me sirve para crear comando que puedo ejecutar por la consola
![Sin título3](https://user-images.githubusercontent.com/113071685/206059789-3302c3b2-a4bb-48a1-83a6-1c0d3043d5ef.png)

ahora si sintalamos el modulo colors con npm, en el package.json me crea una dependencia
![Sin título4](https://user-images.githubusercontent.com/113071685/206060959-303962f6-66fa-4d49-9116-70e566aa24cb.png)

llamamos con un require al modulo y le cambiamos el color 
![image](https://user-images.githubusercontent.com/113071685/206061354-037ad5b8-dc60-411b-b13c-6c8496594b0d.png)


creamos la carpeta src donde va el codigo para dejar el resto afuera y estar mas ordenado y debemos modificar la ruta del package.json
![Sin título6](https://user-images.githubusercontent.com/113071685/206061991-700a8d65-0f47-4171-93a2-84171db7ab5d.png)

tambien podemos instalar modulos de manera global, osea directamente en la computadora a traves de npm install nodemon -g
![Sin título](https://user-images.githubusercontent.com/113071685/206546005-ab06dc99-17fa-49a7-a3e9-f8bb6a746cec.png)


instalando el modulo cowsay, en la carpeta bin tenemos los ejecutables de consola
![Sin título1](https://user-images.githubusercontent.com/113071685/206548255-e3317edc-5dee-42d0-81d4-ed58259827df.png)

llamando a un ejecutable del modulo cowsay donde me trae el dibujo de una vaca con un saludo
![Sin título2](https://user-images.githubusercontent.com/113071685/206549219-6798e63d-0df5-4ba1-a818-d8b8de17e6e8.png)

con npx podemos llamar al modulo sin tener que instalarlo en nuestro proyecto y se ejecuta de igual manera
![Sin título5](https://user-images.githubusercontent.com/113071685/206550602-d24abd33-9954-44d9-99cb-c60e328f8a8c.png)

instalamos un servidor para nuestro html creado en la carpeta public a traves del modulo serve llamado con npx
![Sin título6](https://user-images.githubusercontent.com/113071685/206552239-d0dcda53-6de8-49cf-875f-556d2242ca8b.png)








