function comienzo() {
    inicioVariablesGlobales();
    creaEtapa();
    creaFondo();
    creaContenedor();
    creaGranja();
    creaBotonera();
    creaCosas();
    creaEnemigos();
    creaPersonaje();
    creaMonedas();
    creaParteNaves();
    creaTablero();
    inicioLoop_gamer();
}

// Debe ser abierto desde localhost o alguna IP. Utiliza wamp o xampp para el localhost
function creaSonidos() {
    createjs.Sound.registerSound("sonidos/morir.mp3", "morir");
    createjs.Sound.registerSound("sonidos/laser.mp3", "laser");
    createjs.Sound.registerSound("sonidos/laser_fail.mp3", "laser_fail");
    createjs.Sound.registerSound("sonidos/matar.mp3", "matar");
    createjs.Sound.registerSound("sonidos/nave.mp3", "nave");
    createjs.Sound.registerSound("sonidos/pocima.mp3", "pocima");
    createjs.Sound.registerSound("sonidos/salto.mp3", "salto");
}

function inicioVariablesGlobales() {
    jnGlobal.jnEtapa = null;
    jnGlobal.jnContenedor = null;
    jnGlobal.jnLoop_gamer = null;
    jnGlobal.arrJnCosas = new Array();
    jnGlobal.arrJnEnemigos = new Array();
    jnGlobal.arrJnBalas = new Array();
    jnGlobal.arrJnMonedas = new Array();
    jnGlobal.arrJnNave = new Array();
    jnGlobal.jnPersonaje = null;
}

function creaEtapa() {
    switch (jnGlobal.intLevel) {
        case 1:
            jnGlobal.jnEtapa = new createjs.Stage("canvas");
            jnGlobal.boolTouch = createjs.Touch.enable(jnGlobal.jnEtapa);
            break;
        case 2:
            jnGlobal.jnEtapa = new createjs.Stage("canvas");
            jnGlobal.boolTouch = createjs.Touch.enable(jnGlobal.jnEtapa);
            break;
    }
}

function creaFondo() {
    switch (jnGlobal.intLevel) {
        case 1:
            var data = {
                "width": (parseInt($("#canvas").prop("width"))),
                "regX": 0,
                "regY": 0,
                "height": (parseInt($("#canvas").prop("height"))),
                "animations": {
                    "fondo": [0],
                },
                "framerate": 4,
                "images": ["imagenes/fondo_1.jpg"],
                "strNombre": "fondo"
            };
            break;
        case 2:
            var data = {
                "width": (parseInt($("#canvas").prop("width"))),
                "regX": 0,
                "regY": 0,
                "height": (parseInt($("#canvas").prop("height"))),
                "animations": {
                    "fondo": [0],
                },
                "framerate": 4,
                "images": ["imagenes/fondo_1.jpg"],
                "strNombre": "fondo"
            };
            break;
    }

    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.width,
            "regX": data.regX,
            "regY": data.regY,
            "height": data.height
        },
        "animations": data.animations,
        framerate: data.framerate,
        "images": data.images
    });

    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.name = data.strNombre;
    jnGlobal.jnEtapa.addChild(jnAnimation);
}

function creaContenedor() {
    jnGlobal.jnContenedor = new createjs.Container();
    jnGlobal.jnContenedor.x = 0;
    jnGlobal.jnContenedor.y = 0;
    jnGlobal.jnEtapa.addChild(jnGlobal.jnContenedor);
}

function creaGranja() {
    switch (jnGlobal.intLevel) {
        case 1:
            var data = {
                "width": 905,
                "regX": -10,
                "regY": -250,
                "height": 160,
                "animations": {
                    "granja": [0],
                },
                "framerate": 4,
                "images": ["imagenes/granja.png"],
                "strNombre": "granja"
            };
            break;
        case 2:
            var data = {
                "width": 450,
                "regX": -10,
                "regY": -110,
                "height": 160,
                "animations": {
                    "granja": [0],
                },
                "framerate": 4,
                "images": ["imagenes/granja.png"],
                "strNombre": "granja"
            };
            break;
    }

    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.width,
            "regX": data.regX,
            "regY": data.regY,
            "height": data.height
        },
        "animations": data.animations,
        framerate: data.framerate,
        "images": data.images
    });

    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.name = data.strNombre;
    jnAnimation.x = 200;
    jnGlobal.jnContenedor.addChild(jnAnimation);
}

function creaTablero() {
    var jnTextoPuntos = new createjs.Text("0 pts", "20px Arial", "#FFFFFF");
    jnTextoPuntos.x = parseInt($("#canvas").prop("width")) - (parseInt($("#canvas").prop("width") / 3));
    jnTextoPuntos.y = 30;
    jnTextoPuntos.visible = true;
    jnTextoPuntos.textBaseline = "alphabetic";
    jnTextoPuntos.name = "puntos";
    var jnTextoBalas = new createjs.Text("0 disparos", "20px Arial", "#FFFFFF");
    jnTextoBalas.x = parseInt($("#canvas").prop("width")) - (parseInt($("#canvas").prop("width") / 5));
    jnTextoBalas.y = 30;
    jnTextoBalas.visible = true;
    jnTextoBalas.textBaseline = "alphabetic";
    jnTextoBalas.name = "balas";
    // Creo nave
    var data = {
        "width": 160,
        "regX": 0,
        "regY": 0,
        "height": 114,
        "animations": {
            "base": [0],
            "antena": [1],
            "superficie": [2],
            "disco": [3],
            "propulsor": [4],
            "cupula": [5],
            "todo": [0, 5],
        },
        "framerate": 4,
        "images": ["imagenes/nave.png"],
        "nave": "nave"
    };

    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.width,
            "regX": data.regX,
            "regY": data.regY,
            "height": data.height
        },
        "animations": data.animations,
        framerate: data.framerate,
        "images": data.images
    });

    var jnAnimation_base = new createjs.Sprite(jnSpritesheet);
    jnAnimation_base.gotoAndPlay("base");
    jnAnimation_base.name = "base";
    jnGlobal.jnEtapa.addChild(jnAnimation_base);

    var jnAnimation_antena = new createjs.Sprite(jnSpritesheet);
    jnAnimation_antena.visible = false;
    jnAnimation_antena.x = 0;
    jnAnimation_antena.y = 0;
    jnAnimation_antena.gotoAndPlay("antena");
    jnAnimation_antena.name = "antena";
    jnGlobal.jnEtapa.addChild(jnAnimation_antena);

    var jnAnimation_superficie = new createjs.Sprite(jnSpritesheet);
    jnAnimation_superficie.visible = false;
    jnAnimation_superficie.x = 0;
    jnAnimation_superficie.y = 0;
    jnAnimation_superficie.gotoAndPlay("superficie");
    jnAnimation_superficie.name = "superficie";
    jnGlobal.jnEtapa.addChild(jnAnimation_superficie);

    var jnAnimation_disco = new createjs.Sprite(jnSpritesheet);
    jnAnimation_disco.visible = false;
    jnAnimation_disco.x = 5;
    jnAnimation_disco.y = -10;
    jnAnimation_disco.gotoAndPlay("disco");
    jnAnimation_disco.name = "disco";
    jnGlobal.jnEtapa.addChild(jnAnimation_disco);

    var jnAnimation_propulsor = new createjs.Sprite(jnSpritesheet);
    jnAnimation_propulsor.visible = false;
    jnAnimation_propulsor.x = 0;
    jnAnimation_propulsor.y = -8;
    jnAnimation_propulsor.gotoAndPlay("propulsor");
    jnAnimation_propulsor.name = "propulsor";
    jnGlobal.jnEtapa.addChild(jnAnimation_propulsor);

    var jnAnimation_cupula = new createjs.Sprite(jnSpritesheet);
    jnAnimation_cupula.visible = false;
    jnAnimation_cupula.x = 0;
    jnAnimation_cupula.y = -10;
    jnAnimation_cupula.gotoAndPlay("cupula");
    jnAnimation_cupula.name = "cupula";
    jnGlobal.jnEtapa.addChild(jnAnimation_cupula);

    jnGlobal.jnEtapa.addChild(jnTextoPuntos, jnTextoBalas);
}

function creaParteNaves() {
    var data_nave = {
        "intX": 1000,
        "intY": 300,
        "strAnimacion_inicial": "antena",
        "strTipo": "parte_nave",
        "strImagen": "nave",
        "strNombre": "antena",
        "intDesplazamiento_x": -4,
        "intDesplazamiento_y": -4,
        "intAncho": 160,
        "intLargo": 114,
        "intCiclo": 100,
        "animations": {
            "antena": [1],
            "superficie": [2],
            "disco": [3],
            "propulsor": [4],
            "cupula": [5],
            "todo": [0, 5],
        },
        "strTipo_movimiento": "sin_movimiento",
    };
    // Creo nave
    creaParteNave(data_nave);
    // Superficie
    data_nave.strNombre = "superficie";
    data_nave.strAnimacion_inicial = "superficie";
    data_nave.intX = 2600;
    data_nave.intY = 260;
    creaParteNave(data_nave);
    // Disco
    data_nave.strNombre = "disco";
    data_nave.strAnimacion_inicial = "disco";
    data_nave.intX = 2000;
    data_nave.intY = -500;
    creaParteNave(data_nave);
    // Propulsor
    data_nave.strNombre = "propulsor";
    data_nave.strAnimacion_inicial = "propulsor";
    data_nave.intX = 3700;
    data_nave.intY = 100;
    creaParteNave(data_nave);
    // Cupula
    data_nave.strNombre = "cupula";
    data_nave.strAnimacion_inicial = "cupula";
    data_nave.intX = 11500;
    data_nave.intY = 350;
    creaParteNave(data_nave);
}

function creaParteNave(data) {
    var jnParteNave = {
        "intVelocidadHorizontal": 2,
        "jnAnimation": null,
        "intX": data.intX,
        "intY": data.intY,
        "intInitCiclo": 0,
        "intCiclo": data.intCiclo,
        "strTipo": data.strTipo,
        "intAncho": data.intAncho,
        "intLargo": data.intLargo,
        "strTipo_movimiento": data.strTipo_movimiento,
        "intDesplazamiento_x": data.intDesplazamiento_x,
        "intDesplazamiento_y": data.intDesplazamiento_y,
        "boolColisionX": false,
        "boolColisionY": false,
        "strNombre": data.strNombre,
        "movimiento": function() {
            movimientoParteNave(this);
        }
    };
    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.intAncho,
            "numFrames": 49,
            "regX": 0,
            "regY": 0,
            "height": data.intLargo
        },
        "animations": data.animations,
        framerate: 4,
        "images": ["imagenes/" + data.strImagen + ".png"]
    });
    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.gotoAndPlay(data.strAnimacion_inicial);
    var jnAnimationParteNave = jnAnimation;
    jnAnimationParteNave.x = data.intX;
    jnAnimationParteNave.y = data.intY;
    jnParteNave.jnAnimation = jnAnimationParteNave;
    jnGlobal.arrJnNave.push(jnParteNave);
    jnGlobal.jnContenedor.addChild(jnAnimationParteNave);
}

$(document).ready(function() {
    $(document).keypress(operaEvento);
    $(document).keydown(operaEvento);
    $(document).keyup(operaEvento);
});



function creaBotonera() {
    /*if (jnGlobal.boolTouch) {
     var jnBoton_salto = {
     "jnAnimation": null,
     "intX": 290,
     "intY": 300,
     "strTipo": "boton",
     "intAncho": 100,
     "intLargo": 100,
     "strAnimacion_inicial": "boton",
     };
     var jnSpritesheet = new createjs.SpriteSheet({
     "frames": {
     "width": jnBoton_salto.intAncho,
     "numFrames": 49,
     "regX": 0,
     "regY": 0,
     "height": jnBoton_salto.intLargo
     },
     "animations": {
     "boton": [0]
     },
     framerate: 4,
     "images": ["boton.png"]
     });
     var jnAnimation = new createjs.Sprite(jnSpritesheet);
     jnAnimation.gotoAndPlay(jnBoton_salto.strAnimacion_inicial);
     var jnAnimationBoton_salto = jnAnimation;
     jnAnimationBoton_salto.x = jnBoton_salto.intX;
     jnAnimationBoton_salto.y = jnBoton_salto.intY;
     jnBoton_salto.jnAnimation = jnAnimationBoton_salto;
     jnGlobal.jnEtapa.addChild(jnAnimationBoton_salto);
     jnBoton_salto.jnAnimation.addEventListener('mousedown', function() {
     if (!jnGlobal.jnPersonaje.boolVolando) {
     jnGlobal.jnPersonaje.boolSaltando = true;
     }
     });
     
     var jnBoton_right = {
     "jnAnimation": null,
     "intX": 145,
     "intY": 300,
     "strTipo": "boton",
     "intAncho": 100,
     "intLargo": 100,
     "strAnimacion_inicial": "boton",
     };
     var jnSpritesheet = new createjs.SpriteSheet({
     "frames": {
     "width": jnBoton_right.intAncho,
     "numFrames": 49,
     "regX": 0,
     "regY": 0,
     "height": jnBoton_right.intLargo
     },
     "animations": {
     "boton": [0]
     },
     framerate: 4,
     "images": ["boton.png"]
     });
     var jnAnimation = new createjs.Sprite(jnSpritesheet);
     jnAnimation.gotoAndPlay(jnBoton_right.strAnimacion_inicial);
     var jnAnimationBoton_right = jnAnimation;
     jnAnimationBoton_right.x = jnBoton_right.intX;
     jnAnimationBoton_right.y = jnBoton_right.intY;
     jnBoton_right.jnAnimation = jnAnimationBoton_right;
     jnGlobal.jnEtapa.addChild(jnAnimationBoton_right);
     jnBoton_right.jnAnimation.addEventListener('mousedown', function() {
     jnGlobal.jnPersonaje.boolRight = true;
     if (!jnGlobal.jnPersonaje.boolVolando) {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("right");
     }
     jnGlobal.ultimoSentido = "right";
     jnGlobal.strUltimoEstado = "caminando";
     });
     jnBoton_right.jnAnimation.addEventListener('pressup', function() {
     jnGlobal.jnPersonaje.boolRight = false;
     if (!jnGlobal.jnPersonaje.boolLeft && !jnGlobal.jnPersonaje.boolRight) {
     if (jnGlobal.ultimoSentido == "left") {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_left");
     } else {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_right");
     }
     } else {
     if (jnGlobal.ultimoSentido == "left") {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("left");
     } else {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("right");
     }
     }
     jnGlobal.strUltimoEvento = null;
     });
     
     var jnBoton_left = {
     "jnAnimation": null,
     "intX": 5,
     "intY": 300,
     "strTipo": "boton",
     "intAncho": 100,
     "intLargo": 100,
     "strAnimacion_inicial": "boton",
     };
     var jnSpritesheet = new createjs.SpriteSheet({
     "frames": {
     "width": jnBoton_left.intAncho,
     "numFrames": 49,
     "regX": 0,
     "regY": 0,
     "height": jnBoton_left.intLargo
     },
     "animations": {
     "boton": [0]
     },
     framerate: 4,
     "images": ["boton.png"]
     });
     var jnAnimation = new createjs.Sprite(jnSpritesheet);
     jnAnimation.gotoAndPlay(jnBoton_left.strAnimacion_inicial);
     var jnAnimationBoton_left = jnAnimation;
     jnAnimationBoton_left.x = jnBoton_left.intX;
     jnAnimationBoton_left.y = jnBoton_left.intY;
     jnBoton_left.jnAnimation = jnAnimationBoton_left;
     jnGlobal.jnEtapa.addChild(jnAnimationBoton_left);
     jnBoton_left.jnAnimation.addEventListener('mousedown', function() {
     jnGlobal.jnPersonaje.boolLeft = true;
     if (!jnGlobal.jnPersonaje.boolVolando) {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("left");
     }
     jnGlobal.ultimoSentido = "left";
     jnGlobal.strUltimoEstado = "caminando";
     });
     jnBoton_left.jnAnimation.addEventListener('pressup', function() {
     jnGlobal.jnPersonaje.boolLeft = false;
     if (!jnGlobal.jnPersonaje.boolLeft && !jnGlobal.jnPersonaje.boolRight) {
     if (jnGlobal.ultimoSentido == "left") {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_left");
     } else {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_right");
     }
     } else {
     if (jnGlobal.ultimoSentido == "left") {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("left");
     } else {
     //jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("right");
     }
     }
     jnGlobal.strUltimoEvento = null;
     });
     
     var jnBoton_disparo = {
     "jnAnimation": null,
     "intX": 300,
     "intY": 450,
     "strTipo": "boton",
     "intAncho": 100,
     "intLargo": 100,
     "strAnimacion_inicial": "boton",
     };
     var jnSpritesheet = new createjs.SpriteSheet({
     "frames": {
     "width": jnBoton_disparo.intAncho,
     "numFrames": 49,
     "regX": 0,
     "regY": 0,
     "height": jnBoton_disparo.intLargo
     },
     "animations": {
     "boton": [0]
     },
     framerate: 4,
     "images": ["boton.png"]
     });
     var jnAnimation = new createjs.Sprite(jnSpritesheet);
     jnAnimation.gotoAndPlay(jnBoton_disparo.strAnimacion_inicial);
     var jnAnimationBoton_disparo = jnAnimation;
     jnAnimationBoton_disparo.x = jnBoton_disparo.intX;
     jnAnimationBoton_disparo.y = jnBoton_disparo.intY;
     jnBoton_disparo.jnAnimation = jnAnimationBoton_disparo;
     jnGlobal.jnEtapa.addChild(jnAnimationBoton_disparo);
     jnBoton_disparo.jnAnimation.addEventListener('click', function() {
     if (jnGlobal.ultimoSentido == "left") {
     disparar(-1, -1);
     } else {
     disparar(1, 1);
     }
     if (jnGlobal.jnPersonaje.intCantidadBalas > 0) {
     jnGlobal.jnPersonaje.intCantidadBalas -= 1;
     }
     });
     }*/
}

function creaPersonaje() {
    jnGlobal.jnPersonaje = {
        // Variables teclado "teclado"
        "strUltimoEvento": null,
        "strUltimoSentidoX": null,
        "arrTeclas": new Array(),
        "boolLeft": false,
        "boolUp": false,
        "boolDown": false,
        "boolRight": false,
        // Variables "escalera"
        "boolEscalando": false,
        "boolColisionEscalaX": false,
        "boolColisionEscalaY": false,
        // Variables "sprite"
        "jnAnimation": null,
        "intAncho": 47,
        "intLargo": 73,
        // Variables "atributos"
        "strNombre": "Frank_Amadeus_Kismann_Clarke",
        "strTipo": "personaje",
        "intVelocidadHorizontal": 20,
        "intPuntaje": 0,
        "intLevel": 1,
        "intCantidadMonedas": 0,
        "intCantidadBalas": 0,
        "intPuntaje": 0,
                "intX": jnGlobal.intInicialX,
        "intY": jnGlobal.intInicialY,
        "boolDisparando": false,
        // Variables "colision"
        "boolContactoSuelo": false,
        "boolSaltando": false,
        "boolVolando": false,
        "boolColisionX": false,
        "boolColisionY": false,
        "boolProximidad": false,
        // Variables "movimiento"
        "intLimiteY": 500,
        "intInicioDesacelereacion": 15,
        "intInicioAcelereacion": 0,
        "intDesacelereacion": 15,
        "intAcelereacion": 0,
        "intVectorLeft": -1,
        "intVectorRight": 1,
        "intVectorDown": 1,
        "intVectorUp": -1,
        "intTransporteX": 0,
        // Variable de "estado"
        "boolEstado": true,
    };
    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": jnGlobal.jnPersonaje.intAncho,
            "numFrames": 49,
            "regX": 0,
            "regY": 0,
            "height": jnGlobal.jnPersonaje.intLargo
        },
        "animations": {
            "detenido_right": [1],
            "detenido_left": [1],
            "right": [0, 1],
            "left": [0, 1],
            "saltando": [7],
            "disparando_right": [2],
            "disparando_left": [3],
            "escalando": [4, 6]
        },
        framerate: 10,
        "images": ["imagenes/personaje_spritee.png"]
    });
    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.x = jnGlobal.jnPersonaje.intX;
    jnAnimation.y = jnGlobal.jnPersonaje.intY;
    jnGlobal.jnPersonaje.jnAnimation = jnAnimation;
    jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_right");
    jnGlobal.jnContenedor.addChild(jnAnimation);
}

function creaCosas() {
    switch (jnGlobal.intLevel) {
        case 1:
            var data_cosa = {
                "intX": -500,
                "intY": 400,
                "strAnimacion_inicial": "tierra_1",
                "strTipo": "normal",
                "strImagen": "tierra",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 131,
                "intLargo": 112,
                "intCiclo": 100,
                "animations": {
                    "tierra_1": [0],
                    "tierra_2": [1],
                    "tierra_3": [2],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            // Creo tierra
            for (var i = 0; i < 100; i++) {
                if (i % 2 == 0) {
                    data_cosa.strAnimacion_inicial = "tierra_1";
                }
                if (i % 3 == 0) {
                    data_cosa.strAnimacion_inicial = "tierra_2";
                } else {
                    data_cosa.strAnimacion_inicial = "tierra_3";
                }
                if (i != 90 && i != 92) {
                    creaCosa(data_cosa);
                }
                data_cosa.intX += (data_cosa.intAncho - 2);
            }
            var intXTierra = data_cosa.intX;
            var intYTierra = data_cosa.intY - 100;
            // Creo piedras
            data_cosa = {
                "intX": 500,
                "intY": 300,
                "strAnimacion_inicial": "piedra_2",
                "strTipo": "normal",
                "strImagen": "piedra",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 132,
                "intLargo": 108,
                "intCiclo": 100,
                "animations": {
                    "piedra_1": [0],
                    "piedra_2": [1],
                    "piedra_3": [2],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            for (var i = 0; i < 1; i++) {
                creaCosa(data_cosa);
            }
            data_cosa.intX = 850;
            data_cosa.intY = 300;
            for (var i = 0; i < 2; i++) {
                data_cosa.strAnimacion_inicial = "piedra_1";
                creaCosa(data_cosa);
                data_cosa.intY -= (data_cosa.intLargo - 10);
            }
            // Creo troncos
            data_cosa = {
                "intX": 1500,
                "intY": 385,
                "strAnimacion_inicial": "tronco_1",
                "strTipo": "escalera",
                "strImagen": "tronco",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 32,
                "intLargo": 18,
                "intCiclo": 100,
                "animations": {
                    "tronco_1": [0],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            for (var i = 0; i < 70; i++) {
                creaCosa(data_cosa);
                data_cosa.intY -= (data_cosa.intLargo - 6);
            }
            data_cosa.intY = 385;
            data_cosa.intX = 3020;
            for (var i = 0; i < 5; i++) {
                creaCosa(data_cosa);
                data_cosa.intY -= (data_cosa.intLargo - 6);
            }
            data_cosa.intY = 385;
            data_cosa.intX = 3220;
            for (var i = 0; i < 10; i++) {
                creaCosa(data_cosa);
                data_cosa.intY -= (data_cosa.intLargo - 6);
            }
            data_cosa.intY = 385;
            data_cosa.intX = 3520;
            for (var i = 0; i < 190; i++) {
                creaCosa(data_cosa);
                data_cosa.intY -= (data_cosa.intLargo - 6);
            }
            // Creo cajas
            data_cosa = {
                "intX": 100,
                "intY": 285,
                "strAnimacion_inicial": "caja_1",
                "strTipo": "normal",
                "strImagen": "caja",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 104,
                "intLargo": 105,
                "intCiclo": 100,
                "animations": {
                    "caja_1": [0],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            data_cosa.intX = 1700;
            data_cosa.intY = 400;
            for (var i = 0; i < 2; i++) {
                data_cosa.intY -= (data_cosa.intLargo - 2);
                creaCosa(data_cosa);
            }
            data_cosa.intY -= (data_cosa.intLargo - 2);
            data_cosa.intX = 1750;
            creaCosa(data_cosa);
            data_cosa.intY -= (data_cosa.intLargo - 2);
            creaCosa(data_cosa);
            data_cosa.intX = intXTierra - data_cosa.intAncho;
            data_cosa.intY = intYTierra;
            creaCosa(data_cosa);
            data_cosa.intY -= data_cosa.intLargo;
            creaCosa(data_cosa);
            for (var i = 0; i < 2; i++) {
                data_cosa.intY -= (data_cosa.intLargo - 2);
                creaCosa(data_cosa);
            }
            // estructura con cajas
            var intBase_x = 2900;
            data_cosa.intX = intBase_x;
            var intBase_y = 300;
            data_cosa.intY = intBase_y;
            for (var i = 0; i < 10; i++) {
                data_cosa.intX += (data_cosa.intAncho - 2);
                creaCosa(data_cosa);
            }
            for (var i = 0; i < 20; i++) {
                data_cosa.intY -= (data_cosa.intLargo - 2);
                creaCosa(data_cosa);
            }
            var intBase_x = 2700;
            data_cosa.intX = intBase_x;
            var intBase_y = 300;
            data_cosa.intY = intBase_y;
            for (var i = 0; i < 10; i++) {
                data_cosa.intY -= (data_cosa.intLargo - 2);
                creaCosa(data_cosa);
            }
            var intBase_x = 3500;
            data_cosa.intX = intBase_x;
            var intBase_y = 300;
            data_cosa.intY = intBase_y;
            for (var i = 0; i < 5; i++) {
                data_cosa.intY -= (data_cosa.intLargo - 2);
                creaCosa(data_cosa);
            }
            var intBase_x = 3800;
            data_cosa.intX = intBase_x;
            for (var i = 0; i < 5; i++) {
                data_cosa.intX -= (data_cosa.intAncho - 2);
                creaCosa(data_cosa);
            }
            // Creo clavos
            data_cosa = {
                "intX": 100,
                "intY": 285,
                "strAnimacion_inicial": "clavos_1",
                "strTipo": "clavo",
                "strImagen": "clavos",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 40,
                "intLargo": 29,
                "intCiclo": 100,
                "animations": {
                    "clavos_1": [0],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            data_cosa.intX = 1300;
            data_cosa.intY = 370;
            for (var i = 0; i < 3; i++) {
                data_cosa.intX -= (data_cosa.intAncho - 2);
                creaCosa(data_cosa);
            }
            data_cosa.intX = 1700;
            data_cosa.intY = 165;
            creaCosa(data_cosa);
            data_cosa.intX = 2700;
            data_cosa.intY = 370;
            for (var i = 0; i < 8; i++) {
                data_cosa.intX -= (data_cosa.intAncho - 2);
                creaCosa(data_cosa);
            }

            // Creo nubes
            data_cosa = {
                "intX": 100,
                "intY": 285,
                "strAnimacion_inicial": "nube_1",
                "strTipo": "nube",
                "strImagen": "nube",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 261,
                "intLargo": 147,
                "intCiclo": 100,
                "animations": {
                    "nube_1": [0],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            data_cosa.intX = 3300;
            data_cosa.intY = -400;
            creaCosa(data_cosa);

            data_cosa.intX = 1700;
            data_cosa.intY = -100;
            for (var i = 0; i < 3; i++) {
                data_cosa.intX += (data_cosa.intAncho + 200);
                data_cosa.intY += 100;
                creaCosa(data_cosa);
            }
            data_cosa.intX = 2250;
            data_cosa.intY = 450;
            for (var i = 0; i < 15; i++) {
                data_cosa.intY -= (data_cosa.intLargo + 150);
                creaCosa(data_cosa);
            }
            data_cosa.intX = 2550;
            data_cosa.intY = 450;
            for (var i = 0; i < 30; i++) {
                data_cosa.intY -= (data_cosa.intLargo + 150);
                data_cosa.intX = Math.floor((Math.random() * 2550) + 3000);
                creaCosa(data_cosa);
            }
            // Creo vacas
            data_cosa = {
                "intX": 100,
                "intY": 285,
                "strAnimacion_inicial": "vaca_1",
                "strTipo": "vaca",
                "strImagen": "vaca",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 198,
                "intLargo": 122,
                "intCiclo": 100,
                "animations": {
                    "vaca_1": [0],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            creaCosa(data_cosa);
            data_cosa.intX = 4700;
            creaCosa(data_cosa);
            break;
        case 2:
            var data_cosa = {
                "intX": 0,
                "intY": 380,
                "strAnimacion_inicial": "bloque",
                "strTipo": "normal",
                "strImagen": "smb_tiles",
                "intDesplazamiento_x": -1,
                "intDesplazamiento_y": -1,
                "intLargo": 56,
                "intAncho": 56,
                "intCiclo": 100,
                "animations": {
                    "bloque": [0],
                    "pasto": [1],
                    "plataforma": [2],
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            data_cosa.intX = data_cosa.intX + data_cosa.intLargo;
            data_cosa.intY = data_cosa.intY - data_cosa.intLargo;
            creaCosa(data_cosa);
            data_cosa.intY = data_cosa.intY + data_cosa.intLargo;
            for (var i = 0; i < 5; i++) {
                creaCosa(data_cosa);
                data_cosa.intX = data_cosa.intX + data_cosa.intLargo;
                creaCosa(data_cosa);
                data_cosa.intX = data_cosa.intX + data_cosa.intLargo;
                creaCosa(data_cosa);
                data_cosa.intX = data_cosa.intX + data_cosa.intLargo;
                creaCosa(data_cosa);
                data_cosa.intY = data_cosa.intY - data_cosa.intLargo;
            }
            break;
    }
}
function creaCosa(data) {
    var jnCosa = {
        "intVelocidadHorizontal": 2,
        "jnAnimation": null,
        "intX": data.intX,
        "intY": data.intY,
        "intInitCiclo": 0,
        "intCiclo": data.intCiclo,
        "strTipo": data.strTipo,
        "intAncho": data.intAncho,
        "intLargo": data.intLargo,
        "strTipo_movimiento": data.strTipo_movimiento,
        "intDesplazamiento_x": data.intDesplazamiento_x,
        "intDesplazamiento_y": data.intDesplazamiento_y,
        "boolColisionX": false,
        "boolColisionY": false,
        "movimiento": function() {
            movimientoCosa(this);
        }
    };
    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.intAncho,
            "numFrames": 49,
            "regX": 0,
            "regY": 0,
            "height": data.intLargo
        },
        "animations": data.animations,
        framerate: 4,
        "images": ["imagenes/" + data.strImagen + ".png"]
    });
    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.gotoAndPlay(data.strAnimacion_inicial);
    var jnAnimationCosa = jnAnimation;
    jnAnimationCosa.x = data.intX;
    jnAnimationCosa.y = data.intY;
    jnCosa.jnAnimation = jnAnimationCosa;
    jnGlobal.arrJnCosas.push(jnCosa);
    jnGlobal.jnContenedor.addChild(jnAnimationCosa);
}

function creaMonedas() {
    switch (jnGlobal.intLevel) {
        case 1:
            var data_moneda = {
                "intX": 0,
                "intY": 180,
                "strAnimacion_inicial": "titileo",
                "strTipo": "normal",
                "strImagen": "coin",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intAncho": 30,
                "intLargo": 40,
                "animations": {
                    "titileo": [0]
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            for (var i = 0; i < 2; i++) {
                data_moneda.intX = 500;
                for (var j = 0; j < 3; j++) {
                    creaMoneda(data_moneda);
                    data_moneda.intX = data_moneda.intX + (data_moneda.intAncho + 50);
                }
                data_moneda.intY = data_moneda.intY - (data_moneda.intLargo + 50);
            }
            data_moneda.intY = 170;
            for (var i = 0; i < 2; i++) {
                data_moneda.intX = 3000;
                for (var j = 0; j < 3; j++) {
                    creaMoneda(data_moneda);
                    data_moneda.intX = data_moneda.intX + (data_moneda.intAncho + 50);
                }
                data_moneda.intY = data_moneda.intY - (data_moneda.intLargo + 50);
            }
            data_moneda.intY = -100;
            for (var i = 0; i < 2; i++) {
                data_moneda.intX = 1900;
                for (var j = 0; j < 10; j++) {
                    creaMoneda(data_moneda);
                    data_moneda.intX = data_moneda.intX + (data_moneda.intAncho + 50);
                }
                data_moneda.intY = data_moneda.intY - (data_moneda.intLargo + 50);
            }
            data_moneda.intY = -2500;
            for (var i = 0; i < 2; i++) {
                data_moneda.intX = 1900;
                for (var j = 0; j < 10; j++) {
                    creaMoneda(data_moneda);
                    data_moneda.intX = data_moneda.intX + (data_moneda.intAncho + 50);
                }
                data_moneda.intY = data_moneda.intY - (data_moneda.intLargo + 50);
            }
            data_moneda.intY = 300;
            for (var i = 0; i < 2; i++) {
                data_moneda.intX = 10000;
                for (var j = 0; j < 10; j++) {
                    creaMoneda(data_moneda);
                    data_moneda.intX = data_moneda.intX + (data_moneda.intAncho + 50);
                }
                data_moneda.intY = data_moneda.intY - (data_moneda.intLargo + 50);
            }
            break;
        case 2:
            var data_moneda = {
                "intX": 0,
                "intY": 280,
                "strAnimacion_inicial": "titileo",
                "strTipo": "normal",
                "strImagen": "coin",
                "intDesplazamiento_x": -4,
                "intDesplazamiento_y": -4,
                "intLargo": 32,
                "intAncho": 32,
                "animations": {
                    "titileo": [0, 7]
                },
                "strTipo_movimiento": "sin_movimiento",
            };
            data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
            data_moneda.intY = data_moneda.intY - data_moneda.intLargo;
            creaMoneda(data_moneda);
            data_moneda.intY = data_moneda.intY + data_moneda.intLargo;
            for (var i = 0; i < 5; i++) {
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intY = data_moneda.intY - data_moneda.intLargo;
            }
            data_moneda.intY = 200;
            for (var i = 0; i < 5; i++) {
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intY = data_moneda.intY - data_moneda.intLargo;
            }
            data_moneda.intY = 200;
            for (var i = 0; i < 5; i++) {
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
                data_moneda.intY = data_moneda.intY - data_moneda.intLargo;
            }
            creaMoneda(data_moneda);
            data_moneda.intY = -100;
            data_moneda.intX = 500;
            for (var i = 0; i < 30; i++) {
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
            }
            data_moneda.intY += data_moneda.intLargo;
            data_moneda.intX = 500;
            for (var i = 0; i < 30; i++) {
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
            }
            data_moneda.intY += data_moneda.intLargo;
            data_moneda.intX = 500;
            for (var i = 0; i < 30; i++) {
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
            }
            data_moneda.intY += data_moneda.intLargo;
            data_moneda.intX = 500;
            for (var i = 0; i < 30; i++) {
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
            }
            data_moneda.intY += data_moneda.intLargo;
            data_moneda.intX = 500;
            for (var i = 0; i < 30; i++) {
                data_moneda.intX = data_moneda.intX + data_moneda.intLargo;
                creaMoneda(data_moneda);
            }
            break;
    }
}
function creaMoneda(data) {
    var jnMoneda = {
        "jnAnimation": null,
        "intX": data.intX,
        "intY": data.intY,
        "strTipo": data.strTipo,
        "intAncho": data.intAncho,
        "intLargo": data.intLargo,
        "strTipo_movimiento": data.strTipo_movimiento,
        "intDesplazamiento_x": data.intDesplazamiento_x,
        "intDesplazamiento_y": data.intDesplazamiento_y,
        "boolColisionX": false,
        "boolColisionY": false,
        "movimiento": function() {
            movimientoMoneda(this);
        }
    };
    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.intAncho,
            "numFrames": 49,
            "regX": 0,
            "regY": 0,
            "height": data.intLargo
        },
        "animations": data.animations,
        framerate: 25,
        "images": ["imagenes/" + data.strImagen + ".png"]
    });
    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.gotoAndPlay(data.strAnimacion_inicial);
    var jnAnimationMoneda = jnAnimation;
    jnAnimationMoneda.x = data.intX;
    jnAnimationMoneda.y = data.intY;
    jnMoneda.jnAnimation = jnAnimationMoneda;
    jnGlobal.arrJnMonedas.push(jnMoneda);
    jnGlobal.jnContenedor.addChild(jnAnimationMoneda);

}

function creaEnemigos() {
    switch (jnGlobal.intLevel) {
        case 1:
            // Crea enemigos 1
            var data_enemigo = {
                "strTipo": "enemigo",
                "intX": 150,
                "intY": 100,
                "strAnimacion_inicial": "bloque",
                "strTipo": "normal",
                        "strImagen": "enemigos",
                "intAncho": 39,
                "intLargo": 39,
                "animations": {
                    "bloque": [0, 2],
                    "muerto": [3]
                },
                "strTipo_movimiento": "normal_movimiento",
                "intDesplazamiento_x": 1,
                "intDesplazamiento_y": 1,
            };
            data_enemigo.intDesplazamiento_x *= -1;
            data_enemigo.intX = 1200;
            creaEnemigo(data_enemigo);
            for (var i = 0; i < 10; i++) {
                data_enemigo.intX += Math.floor((Math.random() * 600) + 200);
                creaEnemigo(data_enemigo);
            }
            // Crea enemigos 2
            var data_enemigo = {
                "strTipo": "enemigo",
                "intX": 1350,
                "intY": 100,
                "strAnimacion_inicial": "bloque",
                "strTipo": "normal",
                        "strImagen": "enemigos_2",
                "intAncho": 28,
                "intLargo": 37,
                "animations": {
                    "bloque": [0, 2],
                    "muerto": [3]
                },
                "strTipo_movimiento": "seguir_movimiento",
                "intDesplazamiento_x": 1,
                "intDesplazamiento_y": 1,
            };
            data_enemigo.intX = 4000;
            for (var i = 0; i < 30; i++) {
                data_enemigo.intX += Math.floor((Math.random() * 10) + 200);
                if (i % 2 == 0) {
                    data_enemigo.intDesplazamiento_x = Math.floor((Math.random() * 1) + 2);
                }
                creaEnemigo(data_enemigo);
            }
            data_enemigo.intX = 3500;
            for (var i = 0; i < 30; i++) {
                data_enemigo.intX += Math.floor((Math.random() * 10) + 200);
                if (i % 2 == 0) {
                    data_enemigo.intDesplazamiento_x = Math.floor((Math.random() * 1) + 2);
                }
                creaEnemigo(data_enemigo);
            }
            break;
        case 2:
            var data_enemigo = {
                "intX": 100,
                "intY": 100,
                "strAnimacion_inicial": "bloque",
                "strTipo": "normal",
                "strImagen": "enemigos",
                "intLargo": 32,
                "intAncho": 38,
                "animations": {
                    "bloque": [0],
                    "muerto": [0]
                },
                "strTipo_movimiento": "normal_movimiento",
                "intDesplazamiento_x": 1,
                "intDesplazamiento_y": 1,
            };
            creaEnemigo(data_enemigo);
            data_enemigo.intDesplazamiento_x *= -1;
            data_enemigo.strImagen = "enemigos_2";
            data_enemigo.intX = 500;
            data_enemigo.intLargo = 17;
            data_enemigo.intAncho = 17;
            creaEnemigo(data_enemigo);
            for (var i = 0; i < 5; i++) {
                if (i % 2 == 0) {
                    data_enemigo.intLargo = 32;
                    data_enemigo.intAncho = 38;
                    data_enemigo.strImagen = "enemigos";
                    data_enemigo.intX = data_enemigo.intX + Math.floor((Math.random() * 50) + 10);
                    data_enemigo.intDesplazamiento_x = 1;
                    creaEnemigo(data_enemigo);
                } else {
                    data_enemigo.intLargo = 17;
                    data_enemigo.intAncho = 17;
                    data_enemigo.strImagen = "enemigos_2";
                    data_enemigo.strTipo_movimiento = "seguir_movimiento";
                    data_enemigo.intX = data_enemigo.intX + Math.floor((Math.random() * 50) + 10);
                    data_enemigo.intY = data_enemigo.intY + Math.floor((Math.random() * 2) + 1);
                    data_enemigo.intDesplazamiento_x = 1;
                    creaEnemigo(data_enemigo);
                }
            }
            break;
    }
}

function creaEnemigo(data) {
    var jnEnemigo = {
        "jnAnimation": null,
        "intX": data.intX,
        "intY": data.intY,
        "boolColisionX": false,
        "boolColisionY": false,
        "intAncho": data.intAncho,
        "intLargo": data.intLargo,
        "boolVolando": false,
        "intDesacelereacion": 15,
        "intAcelereacion": 0,
        "intVectorDown": 1,
        "boolEstado": true,
        "intTransporteX": 0,
        "intTransporteY": 0,
        "intDesplazamiento_x": data.intDesplazamiento_x,
        "intDesplazamiento_y": data.intDesplazamiento_y,
        "strTipo_movimiento": data.strTipo_movimiento,
        "movimiento": function() {
            movimientoEnemigo(this);
        },
        "mover_caida": function() {
            moverCaidaEnemigo(this);
        }
    };
    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.intAncho,
            "numFrames": 49,
            "regX": 0,
            "regY": 0,
            "height": data.intLargo
        },
        "animations": data.animations,
        framerate: 7,
        "images": ["imagenes/" + data.strImagen + ".png"]
    });
    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.gotoAndPlay(data.strAnimacion_inicial);
    var jnAnimationEnemigo = jnAnimation;
    jnAnimationEnemigo.x = data.intX;
    jnAnimationEnemigo.y = data.intY;
    jnEnemigo.jnAnimation = jnAnimationEnemigo;
    jnGlobal.arrJnEnemigos.push(jnEnemigo);
    jnGlobal.jnContenedor.addChild(jnAnimationEnemigo);
}

function creaBala(data) {
    var jnBala = {
        "jnAnimation": null,
        "intX": data.intX,
        "intY": data.intY,
        "strTipo_bala": data.strTipo_bala,
        "intAncho": data.intAncho,
        "intLargo": data.intLargo,
        "strTipo_movimiento": data.strTipo_movimiento,
        "intDesplazamiento_x": data.intDesplazamiento_x,
        "intDesplazamiento_y": data.intDesplazamiento_y,
        "boolColisionX": false,
        "boolColisionY": false,
        "boolEstado": true,
        "movimiento": function() {
            movimientoBala(this);
        }
    };
    var jnSpritesheet = new createjs.SpriteSheet({
        "frames": {
            "width": data.intAncho,
            "numFrames": 49,
            "regX": 0,
            "regY": 0,
            "height": data.intLargo
        },
        "animations": data.animations,
        framerate: 4,
        "images": ["imagenes/" + data.strImagen + ".png"]
    });
    var jnAnimation = new createjs.Sprite(jnSpritesheet);
    jnAnimation.gotoAndPlay(data.strAnimacion_inicial);
    var jnAnimationBala = jnAnimation;
    jnAnimationBala.x = data.intX;
    jnAnimationBala.y = data.intY;
    jnBala.jnAnimation = jnAnimationBala;
    jnGlobal.arrJnBalas.push(jnBala);
    jnGlobal.jnContenedor.addChild(jnAnimationBala);
}

function inicioLoop_gamer() {
    jnGlobal.jnLoop_gamer = new createjs.Ticker.setFPS(24);
    createjs.Ticker.on("tick", tick);
}