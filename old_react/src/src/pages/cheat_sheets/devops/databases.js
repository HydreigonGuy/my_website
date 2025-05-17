
import '../../../assets/css/devops.css';

function devops_databases() {
    return (
        <div className='devops_cheatsheet_body'>
            <h1>DevOps - Databases</h1>
            <p>
                Databases are important when deploying servers.
                Here are databases, how to deploy them, and usefull commands to know:
            </p>
            <h3>Postgres</h3>
            <p>
                Postgres is an SQL based database, it's made for storing structured data and it does it really well.
                You should use this when you have structured data, and it's very effective for linking objects together.
                You should not use this with unstructured data.
                Everytime you want to change a data structure, you will have to migrate the database.
                When filling the database, it is faster to make few requests that each write / read a lot of data than a lot of small requests.
            </p>
            <p>To launch, create a <b>docker-compose.yaml</b> with the following contents:</p>
            <p className='file_contents'>
version: '3.1'<br/>
services:<br/>
&emsp;# postgres image<br/>
&emsp;db:<br/>
&emsp;&emsp;image: postgres<br/>
&emsp;&emsp;restart: always<br/>
&emsp;&emsp;environment:<br/>
&emsp;&emsp;&emsp;POSTGRES_PASSWORD: <b>PASSWORD</b><br/>
<br/>
&emsp;# example deployment app<br/>
&emsp;adminer:<br/>
&emsp;&emsp;image: adminer<br/>
&emsp;&emsp;restart: always<br/>
&emsp;&emsp;ports:<br/>
&emsp;&emsp;&emsp;- 8080:8080
            </p>
            <h3>MongoDB</h3>
            <p>
                MongoDB is not SQL based, so you don't need to structure data to store it.
                It stores data as JSON.
            </p>
            <p>To launch, create a <b>docker-compose.yaml</b> with the following contents:</p>
            <p className='file_contents'>
version: '3.1'<br/>
services:<br/>
&emsp;# mongodb image<br/>
&emsp;mongo:<br/>
&emsp;&emsp;image: mongo<br/>
&emsp;&emsp;restart: always<br/>
&emsp;&emsp;environment:<br/>
&emsp;&emsp;&emsp;MONGO_INITDB_ROOT_USERNAME: <b>USERNAME</b><br/>
&emsp;&emsp;&emsp;MONGO_INITDB_ROOT_PASSWORD: <b>PASSWORD</b><br/>
<br/>
&emsp;# example deployment app<br/>
&emsp;mongo-express:<br/>
&emsp;&emsp;image: mongo-express<br/>
&emsp;&emsp;restart: always<br/>
&emsp;&emsp;ports:<br/>
&emsp;&emsp;&emsp;- 8081:8081<br/>
&emsp;&emsp;environment:<br/>
&emsp;&emsp;&emsp;ME_CONFIG_MONGODB_ADMINUSERNAME: root<br/>
&emsp;&emsp;&emsp;ME_CONFIG_MONGODB_ADMINPASSWORD: example<br/>
&emsp;&emsp;&emsp;ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
            </p>
            <p>
                To create a backup:
            </p>
            <p className='bash_code'>
            mongodump -u username -p password -o outpath
            </p>
            <p>To restore a backup:</p>
            <p className='bash_code'>
            mongorestore -u username -p password $PATH_TO_BACKUP
            </p>
            <h3>Useful links</h3>
            <a className="url" href="https://www.postgresql.org/" target="_blank">Postgres official website</a>
            <a className="url" href="https://www.mongodb.com/" target="_blank">MongoDB official website</a>
        </div>
    );
}

export default devops_databases;
