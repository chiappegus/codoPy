# Game Project

Para correr el juego debes seguir las siguientes instrucciones en la terminal:

```sh
cd game
python3 main.py
```



investigando el paquete pip en 
https://pypi.org







    which python3
/usr/bin/python3
    which pip3
/usr/bin/pip3

ambientes virtuales :

Si estas en linus o wsl debes instalar

    sudo apt install -y python3-venv

Setting up python3-venv (3.10.6-1~22.04) ..

Your identification has been saved in /home/pepe/.ssh/id_rsa
Your public key has been saved in /home/pepe/.ssh/id_rsa.pub

https://kinsta.com/es/blog/generar-claves-ssh/


modificacion por ssh ??

touch ~/.ssh/config


#Your day-to-day GitHub account

Host github.com
  HostName github.com
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes

# Work account
Host github-work
  HostName github.com
  IdentityFile ~/.ssh/work_key_file
  IdentitiesOnly yes

Ahora, cada vez que necesites autenticarte por SSH utilizando tu cuenta de trabajo o secundaria, retocas un poco la dirección SSH del repo, de:

git@github.com:workaccount/project.git

ahora desde windows.


Generar una nueva llave SSH: (Cualquier sistema operativo)

ssh-keygen -t rsa -b 4096 -C "youremail@example.com"

Comprobar proceso y agregarlo (Windows)

    eval $(ssh-agent - s)
    ssh-add ~/.ssh/id_rsa

Comprobar proceso y agregarlo (Mac)

    eval "$(ssh-agent -s)"

¿Usas macOS Sierra 10.12.2 o superior? Haz lo siguiente:

    cd ~/.ssh
    Crea un archivo config…
    Con Vim vim config
    Con VSCode code config
    Pega la siguiente configuración en el archivo…

Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa

Agrega tu llave

ssh-add -K ~/.ssh/id_rsa 🥳 
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub


git config --global user.name pepito

:)

poner igual : 
~/.ssh/config/config

Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa


Host github.com
  Hostname ssh.github.com
  Port 443


y en consola :



Change your remote's URL from HTTPS to SSH with the git remote set-url command.

git remote set-url origin git@github.com:OWNER/REPOSITORY.git
git remote set-url origin git@github.com:chiappegus/python_vsc.git



```python
Entornos remotos
```

Hola Chicos! :D Verificar donde esta python y pip

    which python3

    which pip3

Si estas en linus o wsl debes instalar

    sudo apt install -y python3-venv

Poner cada proyecto en su propio ambiente, entrar en cada carpeta.

    python3 -m venv env

Activar el ambiente

    source env/bin/activate

  ""$ source env/Scripts/activate #en el mio ojo.

gchiappe@E1 MINGW64 ~/Downloads/python_vsc/app (main)
$ source env/Scripts/activate
(env)
gchiappe@E12 MINGW64 ~/Downloads/python_vsc/app (main)



Salir del ambiente virtual

  deactivate

Podemos instalar las librerias necesarias en el ambiente virtual como por ejemplo

    pip3 install matplotlib==3.5.0

Verificar las instalaciones

    pip3 freeze


clase 11



# App Project

```sh
git clone
cd app
python3 -m venv env
source env/bin/activate # ojo puede ser source env/Scripts/activate
pip3 install -r requirements.txt
python3 main.py
```


APP project para levantar el proyacto : 


como grabar en el archivo requirements.txt lo instalado en el ambiente: de pip3 freeze


pip3 freeze > requirements.txt

y para instalar se utiliza el comando  .

pip3 install -r requirements.txt

Docker :
docker compose version
docker compose build
(para subir)
docker compose up -d
docker compose ps

NAME            IMAGE         COMMAND                  SERVICE   CREATED          STATUS          PORTS
app-app-csv-1   app-app-csv   "/bin/sh -c 'bash -c…"   app-csv   28 seconds ago   Up 27 seconds


docker-compose exec  app-csv bash


y para bajar es 

docker compose down

+] Running 2/2
 ✔ Container app-app-csv-1  Removed                                                                                       10.4s 
 ✔ Network app_default      Removed     



para ejecutar :
el archivo de configuracion es cookiecutter.json
y esta basado en la carpeta {{cookiecutter.project_slug}}

$ source env/Scripts/activate
$ cookiecutter . 

