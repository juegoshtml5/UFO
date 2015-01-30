function moverDerecha() {
    for (var i = 0; i < jnGlobal.jnPersonaje.intVelocidadHorizontal; i++) {
        if (jnGlobal.jnPersonaje.boolRight) {
            jnGlobal.jnPersonaje.jnAnimation.x += jnGlobal.jnPersonaje.intVectorRight;
            jnGlobal.jnPersonaje.boolColisionX = hayColisionX(jnGlobal.jnPersonaje);
        }
    }
}

function moverIzquierda() {
    for (var i = 0; i < jnGlobal.jnPersonaje.intVelocidadHorizontal; i++) {
        if (jnGlobal.jnPersonaje.boolLeft && jnGlobal.jnPersonaje.jnAnimation.x > 0) {
            jnGlobal.jnPersonaje.jnAnimation.x += jnGlobal.jnPersonaje.intVectorLeft;
            jnGlobal.jnPersonaje.boolColisionX = hayColisionX(jnGlobal.jnPersonaje);
        }
    }
}

function mover_caida() {
    var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
    if (!boolEscaleraColision) {
        if (!jnGlobal.jnPersonaje.boolSaltando) {
            jnGlobal.jnPersonaje.intDesacelereacion = jnGlobal.jnPersonaje.intInicioDesacelereacion;
            jnGlobal.jnPersonaje.intAcelereacion = jnGlobal.jnPersonaje.intAcelereacion + 2;
            for (var i = 0; i < jnGlobal.jnPersonaje.intAcelereacion; i++) {
                jnGlobal.jnPersonaje.jnAnimation.y = jnGlobal.jnPersonaje.jnAnimation.y + jnGlobal.jnPersonaje.intVectorDown;
                jnGlobal.jnPersonaje.boolColisionY = hayColisionY(jnGlobal.jnPersonaje);
                if (jnGlobal.jnPersonaje.boolColisionY) {
                    jnGlobal.jnPersonaje.boolVolando = false;
                    jnGlobal.jnPersonaje.intAcelereacion = -1;
                    if (jnGlobal.jnPersonaje.boolContactoSuelo) {
                        animaciones();
                        jnGlobal.jnPersonaje.boolContactoSuelo = false;
                    }
                } else {
                    jnGlobal.jnPersonaje.boolContactoSuelo = true;
                    jnGlobal.jnPersonaje.boolVolando = true;
                }
                matarEnemigo(jnGlobal.jnPersonaje);
                /*if (arrRetornos[0]) {
                 if (jnGlobal.arrJnEnemigos[arrRetornos[1]].boolEstado == true) {
                 jnGlobal.jnPersonaje.boolSaltando = true;
                 jnGlobal.jnPersonaje.intDesacelereacion = jnGlobal.jnPersonaje.intInicioDesacelereacion;
                 jnGlobal.jnPersonaje.intAcelereacion = jnGlobal.jnPersonaje.intInicioAcelereacion;
                 jnGlobal.arrJnEnemigos[arrRetornos[1]].boolEstado = false;
                 jnGlobal.arrJnEnemigos[arrRetornos[1]].jnAnimation.gotoAndPlay("muerto");
                 }
                 }*/
            }
        }
    }
}

function moverSalto() {
    var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
    if (!boolEscaleraColision) {
        if (jnGlobal.jnPersonaje.boolSaltando) {
            jnGlobal.jnPersonaje.intAcelereacion = jnGlobal.jnPersonaje.intInicioAcelereacion;
            jnGlobal.jnPersonaje.intDesacelereacion = jnGlobal.jnPersonaje.intDesacelereacion - 1;
            for (var i = 0; i < jnGlobal.jnPersonaje.intDesacelereacion; i++) {
                jnGlobal.jnPersonaje.jnAnimation.y = jnGlobal.jnPersonaje.jnAnimation.y + jnGlobal.jnPersonaje.intVectorUp;
                jnGlobal.jnPersonaje.boolColisionY = hayColisionY(jnGlobal.jnPersonaje);
                if (jnGlobal.jnPersonaje.boolColisionY) {
                    jnGlobal.jnPersonaje.boolVolando = false;
                    jnGlobal.jnPersonaje.intDesacelereacion = 0;
                } else {
                    jnGlobal.jnPersonaje.boolVolando = true;
                }
            }
        }
        if (jnGlobal.jnPersonaje.intDesacelereacion == 0) {
            jnGlobal.jnPersonaje.boolSaltando = false;
        }
    }
}

function moverEscalada() {
    var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
    if (jnGlobal.jnPersonaje.boolUp && boolEscaleraColision) {
        jnGlobal.jnPersonaje.jnAnimation.y = jnGlobal.jnPersonaje.jnAnimation.y - 5;
        matarEnemigo(jnGlobal.jnPersonaje);
    }
}

function moverBajada() {
    var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
    if (jnGlobal.jnPersonaje.boolDown && boolEscaleraColision) {
        jnGlobal.jnPersonaje.jnAnimation.y = jnGlobal.jnPersonaje.jnAnimation.y + 5;
        matarEnemigo(jnGlobal.jnPersonaje);
    }
}

function moveCosas() {
    for (var i = 0; i < jnGlobal.arrJnCosas.length; i++) {
        jnGlobal.arrJnCosas[i].movimiento();
    }
}

function movimientoCosa(jnCosa) {
    if (jnCosa.strTipo_movimiento == "normal_movimiento") {
        jnCosa.jnAnimation.x += jnCosa.intDesplazamiento_x;
        jnCosa.intInitCiclo++;
        jnCosa.boolColisionX = hayColisionX(jnCosa);
        if (jnCosa.intInitCiclo == jnCosa.intCiclo) {
            jnCosa.intDesplazamiento_x *= -1;
            jnCosa.intInitCiclo = 0;
        }
    }

    if (jnCosa.strTipo_movimiento == "seguir_movimiento") {
        jnCosa.jnAnimation.x += jnCosa.intDesplazamiento_x;
        jnCosa.boolColisionX = hayColisionX(jnCosa);
        if (jnCosa.boolColisionX) {
            jnCosa.intDesplazamiento_x *= -1;
        }
        if (jnCosa.jnAnimation.x < jnGlobal.jnPersonaje.jnAnimation.x) {
            if (jnCosa.intDesplazamiento_x < 0) {
                jnCosa.intDesplazamiento_x *= -1;
            }
        } else {
            if (jnCosa.intDesplazamiento_x > 0) {
                jnCosa.intDesplazamiento_x *= -1;
            }
        }
    }
}

function moverEnemigos() {
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        if (jnGlobal.arrJnEnemigos[i].boolEstado == true) {
            jnGlobal.arrJnEnemigos[i].movimiento();
        }
    }
}

function movimientoEnemigo(jnEnemigo) {
    hayColisionXEntreEnemigos(jnEnemigo);
    if (jnEnemigo.strTipo_movimiento == "normal_movimiento") {
        for (var i = 0; i < 2; i++) {
            jnEnemigo.jnAnimation.x += jnEnemigo.intDesplazamiento_x;
            jnEnemigo.boolColisionX = hayColisionX(jnEnemigo);
            if (jnEnemigo.boolColisionX) {
                jnEnemigo.intDesplazamiento_x *= -1;
            }
        }
    }
    if (jnEnemigo.strTipo_movimiento == "seguir_movimiento") {
        for (var i = 0; i < 2; i++) {
            jnEnemigo.jnAnimation.x += jnEnemigo.intDesplazamiento_x;
            jnEnemigo.boolColisionX = hayColisionX(jnEnemigo);
            if (jnEnemigo.boolColisionX) {
                jnEnemigo.intDesplazamiento_x *= -1;
            }
            if (jnEnemigo.jnAnimation.x < jnGlobal.jnPersonaje.jnAnimation.x) {
                if (jnEnemigo.intDesplazamiento_x < 0) {
                    jnEnemigo.intDesplazamiento_x *= -1;
                }
            } else {
                if (jnEnemigo.intDesplazamiento_x > 0) {
                    jnEnemigo.intDesplazamiento_x *= -1;
                }
            }
        }
    }
}

function moverBalas() {
    for (var i = 0; i < jnGlobal.arrJnBalas.length; i++) {
        if (jnGlobal.arrJnBalas[i].boolEstado == true) {
            jnGlobal.arrJnBalas[i].movimiento();
            var intDiferencia = jnGlobal.arrJnBalas[i].jnAnimation.x - jnGlobal.jnPersonaje.jnAnimation.x;
            if (intDiferencia < 0) {
                intDiferencia *= -1;
            }
            if (intDiferencia > 200) {
                jnGlobal.arrJnBalas[i].jnAnimation.visible = false;
                jnGlobal.arrJnBalas.splice(i, 1);
            }
        }
    }
}

function movimientoBala(jnBala) {
    if (jnBala.strTipo_movimiento == "normal_movimiento") {
        jnBala.jnAnimation.x += jnBala.intDesplazamiento_x;
        balear(jnBala);
    }
    if (jnBala.strTipo_movimiento == "normal_movimiento") {
        jnBala.jnAnimation.x += jnBala.intDesplazamiento_x;
        balear(jnBala);
    }
}

function moverCaidaEnemigos() {
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        jnGlobal.arrJnEnemigos[i].mover_caida();
    }
}

function moverCaidaEnemigo(jnEnemigo) {
    jnEnemigo.intAcelereacion = jnEnemigo.intAcelereacion + 2;
    for (var i = 0; i < jnEnemigo.intAcelereacion; i++) {
        jnEnemigo.jnAnimation.y = jnEnemigo.jnAnimation.y + jnEnemigo.intVectorDown;
        jnEnemigo.boolColisionY = hayColisionY(jnEnemigo);
        if (jnEnemigo.boolColisionY) {
            jnEnemigo.boolVolando = false;
            jnEnemigo.intAcelereacion = -1;
        } else {
            jnEnemigo.boolVolando = true;
        }
    }
}

function movimientoTrasporte() {
    jnGlobal.jnPersonaje.jnAnimation.x += jnGlobal.jnPersonaje.intTransporteX;
    if (jnGlobal.jnPersonaje.boolVolando) {
        jnGlobal.jnPersonaje.intTransporteX = 0;
    }
}

function movimientoCamara() {
    jnGlobal.jnContenedor.x = (-1) * jnGlobal.jnPersonaje.jnAnimation.x + 200;
    if (jnGlobal.jnPersonaje.jnAnimation.y < jnGlobal.jnPersonaje.intLimiteY) {
        jnGlobal.jnContenedor.y = (-1) * jnGlobal.jnPersonaje.jnAnimation.y + (parseInt($("#canvas").prop("height")) - 150);
    }
}

function morir() {
    jnGlobal.jnPersonaje.boolEstado = false;
    jnGlobal.jnPersonaje.jnAnimation.visible = false;
    createjs.Sound.play("morir");
}

function ganarPartida() {
    if (jnGlobal.arrJnNave.length == 0) {
        jnGlobal.intLevel = 1;
        jnGlobal.jnPersonaje.boolEstado = false;
    }
}

function hacerInvisibleEntidades() {
    for (var i = 0; i < jnGlobal.arrJnCosas.length; i++) {
        jnGlobal.arrJnCosas[i].jnAnimation.visible = false;
    }
    for (var i = 0; i < jnGlobal.arrJnEnemigos.lenght; i++) {
        jnGlobal.arrJnEnemigos[i].jnAnimation.visible = false;
    }
    for (var i = 0; i < jnGlobal.arrJnMonedas.lenght; i++) {
        jnGlobal.arrJnMonedas[i].jnAnimation.visible = false;
    }
    for (var i = 0; i < jnGlobal.arrJnNave.lenght; i++) {
        jnGlobal.arrJnNave[i].jnAnimation.visible = false;
    }
}

function optimizar() {
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        var intDiferencia = jnGlobal.arrJnEnemigos[i].jnAnimation.x - jnGlobal.jnPersonaje.jnAnimation.x;
        if (intDiferencia < 0) {
            intDiferencia *= -1;
        }
        if (jnGlobal.arrJnEnemigos[i].jnAnimation.y > 500 || intDiferencia > 1000) {
            jnGlobal.arrJnEnemigos[i].jnAnimation.visible = false;
            if (jnGlobal.arrJnEnemigos[i].jnAnimation.y > 500) {
                jnGlobal.arrJnEnemigos.splice(i, 1);
            }
        } else {
            jnGlobal.arrJnEnemigos[i].jnAnimation.visible = true;
        }
    }
    for (var i = 0; i < jnGlobal.arrJnCosas.length; i++) {
        var intDiferencia = jnGlobal.arrJnCosas[i].jnAnimation.x - jnGlobal.jnPersonaje.jnAnimation.x;
        if (intDiferencia < 0) {
            intDiferencia *= -1;
        }
        if (jnGlobal.arrJnCosas[i].jnAnimation.y > 500 || intDiferencia > 1000) {
            jnGlobal.arrJnCosas[i].jnAnimation.visible = false;
        } else {
            jnGlobal.arrJnCosas[i].jnAnimation.visible = true;
        }
    }
    for (var i = 0; i < jnGlobal.arrJnMonedas.length; i++) {
        var intDiferencia = jnGlobal.arrJnMonedas[i].jnAnimation.x - jnGlobal.jnPersonaje.jnAnimation.x;
        if (intDiferencia < 0) {
            intDiferencia *= -1;
        }
        if (jnGlobal.arrJnMonedas[i].jnAnimation.y > 500 || intDiferencia > 1000) {
            jnGlobal.arrJnMonedas[i].jnAnimation.visible = false;
        } else {
            jnGlobal.arrJnMonedas[i].jnAnimation.visible = true;
        }
    }


}

function ultimos_datos() {
    jnGlobal.intInicialX = jnGlobal.jnPersonaje.jnAnimation.x;
    jnGlobal.intInicialY = -200;
}

function balear(jnEntidad) {
    jnEntidad.boolColisionY = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnEnemigos[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnEnemigos[i].jnAnimation.x + jnGlobal.arrJnEnemigos[i].intAncho)))
            intNoColision = 0;
        else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnEnemigos[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnEnemigos[i].jnAnimation.y + jnGlobal.arrJnEnemigos[i].intLargo)))
            intNoColision = 0;
        else {
            if (jnGlobal.arrJnEnemigos[i].boolEstado) {
                jnGlobal.arrJnEnemigos[i].boolEstado = false;
                jnGlobal.arrJnEnemigos[i].jnAnimation.gotoAndPlay("muerto");
                jnEntidad.boolEstado = false;
            }
        }
    }
}

function evaluaEstadoBala() {
    for (var i = 0; i < jnGlobal.arrJnBalas.length; i++) {
        if (jnGlobal.arrJnBalas[i].boolEstado == false) {
            jnGlobal.arrJnBalas[i].jnAnimation.visible = false;
            jnGlobal.arrJnBalas.splice(i, 1);
        }
    }
}

function actualizaPuntaje() {
    jnGlobal.jnEtapa.getChildByName("puntos").text = jnGlobal.jnPersonaje.intPuntaje + " pts";
    //jnGlobal.intPuntaje = jnGlobal.jnPersonaje.intPuntaje;
}

function actualizaBalas() {
    jnGlobal.jnEtapa.getChildByName("balas").text = jnGlobal.jnPersonaje.intCantidadBalas + " disparos";
}

function disparar(intSentido_x, intSentido_y) {
    if (jnGlobal.jnPersonaje.intCantidadBalas > 0) {
        createjs.Sound.play("laser");
        var strAnimacion_inicial = "";
        if (intSentido_x < 0) {
            strAnimacion_inicial = "disparo_left";
        } else {
            strAnimacion_inicial = "disparo_right";
        }
        var data_bala = {
            "intX": jnGlobal.jnPersonaje.jnAnimation.x,
            "intY": (jnGlobal.jnPersonaje.jnAnimation.y + (jnGlobal.jnPersonaje.intLargo / 2)),
            "strAnimacion_inicial": strAnimacion_inicial,
            "strTipo_bala": "normal",
            "strImagen": "laser",
            "intAncho": 40,
            "intLargo": 8,
            "animations": {
                "disparo_left": [1],
                "disparo_right": [0]
            },
            "strTipo_movimiento": "normal_movimiento",
            "intDesplazamiento_x": (intSentido_x * 20),
            "intDesplazamiento_y": (intSentido_y * 20)
        };
        creaBala(data_bala);
        jnGlobal.arrJnBalas[(jnGlobal.arrJnBalas.length - 1)].movimiento();
    } else {
        createjs.Sound.play("laser_fail");
    }
}

function moverGranja() {
    jnGlobal.jnContenedor.getChildByName("granja").x = Math.floor(jnGlobal.jnPersonaje.jnAnimation.x / 1.1);
}


function animaciones() {
    var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
    if (!boolEscaleraColision) {
        if (jnGlobal.jnPersonaje.boolLeft) {
            jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("left");
        }
        if (jnGlobal.jnPersonaje.boolRight) {
            jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("right");
        }
        if (!jnGlobal.jnPersonaje.boolRight && !jnGlobal.jnPersonaje.boolLeft) {
            if (jnGlobal.jnPersonaje.strUltimoSentidoX == "right") {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_right");
            } else {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_left");
            }
        }
        if (jnGlobal.jnPersonaje.boolDisparando) {
            if (jnGlobal.jnPersonaje.strUltimoSentidoX == "left") {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndStop("disparando_left");
                disparar(-1, -1);
            } else {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndStop("disparando_right");
                disparar(1, 1);
            }
            if (jnGlobal.jnPersonaje.intCantidadBalas > 0) {
                jnGlobal.jnPersonaje.intCantidadBalas -= 1;
            }
        }
        if (jnGlobal.jnPersonaje.boolSaltando) {
            jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("saltando");
        }
    } else {
        if (jnGlobal.jnPersonaje.boolEscalando) {
            jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("escalando");
        } else {
            if (jnGlobal.jnPersonaje.strUltimoSentidoX == "right") {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_right");
            } else {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndPlay("detenido_left");
            }
        }
    }
}

function ataqueEnemigo() {
    if (hayColisionEnemigo(jnGlobal.jnPersonaje)) {
        morir();
    }
}

function caidaAgujero() {
    if (jnGlobal.jnPersonaje.jnAnimation.y > (jnGlobal.jnPersonaje.intLimiteY * 2)) {
        morir();
    }
}