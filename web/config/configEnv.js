/**
 * Created by vedorhto on 02/09/2015.
 */
var convict         = require('convict');

//Define aschema
var conf = convict({
    env:{
        doc:"The application environment.",
        format: ["development","test","production"],
        default: "development",
        env: "NODE_ENV"
    }
});

//load environment dependent configuration
var env = conf.get('env');
console.log('load conf for mode: ' + env);

if(process.env.NODE_ENV == 'test'){

}else {
    if(process.env.NODE_ENV == 'production'){

    }
    else{
        conf2 = convict({
            env:{
                doc:"The application environment.",
                format: ["development","test","production"],
                default: "development",
                env: "NODE_ENV"
            },
            backend:{
                doc:"The app backend.",
                format:"*",
                default:"http://localhost:3100",
                env:"BACKEND"
            },
            frontend:{
                host:{
                    doc:"The IP to bind.",
                    format: "*",
                    default: "localhost",
                    env: "NODEJS_IP"
                },
                port:{
                    doc:"The port to bind.",
                    format: "port",
                    default: 8050,
                    env: "NODEJS_PORT"
                }
            }

        });
    }
}


conf2.validate();

module.exports = conf2;