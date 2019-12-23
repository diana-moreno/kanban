module.exports = function (url, { method = 'GET', headers, body } = {}) {
    // por defecto tiene que tener un valor aunque sea vacío, porque sino da error de undefined
    return new Promise((resolve, reject) => {
        try {
            var xhr = new XMLHttpRequest()

            xhr.open(method, url)

            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 0) {
                        debugger
                        reject(new Error(`fail to call ${url}`))
                    } else {
                        const response = {
                            status: this.status,
                            body: this.responseText
                        }

                        resolve(response)
                    }
                }
            }

            // xhr.onerror = function (error) {
            //     reject(error)
            // }

            if (headers)
                for (let key in headers)
                    xhr.setRequestHeader(key, headers[key])

            body ? xhr.send(body) : xhr.send()
        } catch (error) {
            reject(error)
        }
    })
}