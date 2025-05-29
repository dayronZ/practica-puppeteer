import puppeteer from "puppeteer";
async function abrirPaginaWeb(){
    console.log(':::Inicio:::')
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 400
    });

    const pagina = await navegador.newPage();

    await pagina.goto('https://example.com');

    navegador.close();

    console.log(':::Termine:::')

}

//abrirPaginaWeb();



async function capturarScreen(){
    console.log(':::Inicio:::')
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 400
    });

    const pagina = await navegador.newPage();

    await pagina.goto('https://utsh.edu.mx/');

    await pagina.screenshot(
        {
            path: `./screenshots/ejemplo-${Date.now()}.png`,
            fullPage: true
        }
    )

    navegador.close();

    console.log(':::Termine:::')

}
//capturarScreen();

async function navegarentrepaginas(){
    console.log(':::Inicio:::')
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 400
    });

    const pagina = await navegador.newPage();

    await pagina.goto('https://example.com/');

    await pagina.click('div>p>a[href="https://www.iana.org/help/example-domains"]');

    await new promise (()=>setTimeout(resolve, 300))

    await pagina.screenshot(
        {
            path: "./screenshots/Pagina-visitado-Autom.png",
            fullPage: true,
        }
    )
    navegador.close();

    console.log(':::Termine:::')

}
navegarentrepaginas();