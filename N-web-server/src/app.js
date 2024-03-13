//(() => {})() //FUNCION AGNOSTICA AUTOCONVOCADA
// Agnóstica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los ()
const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public: envs.PUBLIC_PATH
    })
}

// ⬇FUNCION AGNOSTICA
(async () => {
    main()
})()