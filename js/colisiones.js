function hayColisionX(jnEntidad) {
    jnEntidad.boolColisionX = false;
    jnEntidad.boolColisionEscalaX = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnCosas.length; i++) {
        if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnCosas[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnCosas[i].jnAnimation.x + jnGlobal.arrJnCosas[i].intAncho)))
            intNoColision = 0;
        else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnCosas[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnCosas[i].jnAnimation.y + jnGlobal.arrJnCosas[i].intLargo)))
            intNoColision = 0;
        else {
            if (jnGlobal.arrJnCosas[i].strTipo == "normal" || jnGlobal.arrJnCosas[i].strTipo == "nube") {
                if (jnGlobal.arrJnCosas[i].strTipo != "nube" && (jnEntidad.jnAnimation.x + jnEntidad.intAncho) > (jnGlobal.arrJnCosas[i].jnAnimation.x + jnGlobal.arrJnCosas[i].intAncho)) {
                    jnEntidad.jnAnimation.x = jnGlobal.arrJnCosas[i].jnAnimation.x + jnGlobal.arrJnCosas[i].intAncho;
                    jnEntidad.boolColisionX = true;
                }
                if (jnGlobal.arrJnCosas[i].strTipo != "nube" && jnEntidad.jnAnimation.x < jnGlobal.arrJnCosas[i].jnAnimation.x) {
                    jnEntidad.jnAnimation.x = jnGlobal.arrJnCosas[i].jnAnimation.x - jnEntidad.intAncho;
                    jnEntidad.boolColisionX = true;
                }
            }
            if (jnGlobal.arrJnCosas[i].strTipo == "escalera") {
                jnEntidad.boolColisionX = true;
                jnEntidad.boolColisionEscalaX = true;
                jnEntidad.boolVolando = false;
                jnEntidad.boolSaltando = true;
                if (jnEntidad.boolUp) {
                    jnEntidad.boolEscalando = true;
                } else {
                    jnEntidad.boolEscalando = false;
                }
            }
            if (jnGlobal.arrJnCosas[i].strTipo == "clavo" && jnEntidad.strTipo == "personaje") {
                jnGlobal.jnPersonaje.boolEstado = false;
            }
        }
    }

    if (jnEntidad.boolColisionX) {
        //console.log("boolColisionX = " + jnGlobal.jnPersonaje.boolColisionX);
    } else {
        //console.log("boolColisionX = " + jnGlobal.jnPersonaje.boolColisionX);
    }
    return jnEntidad.boolColisionX;
}

function hayColisionY(jnEntidad) {
    jnEntidad.boolColisionY = false;
    jnEntidad.boolColisionEscalaY = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnCosas.length; i++) {
        if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnCosas[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnCosas[i].jnAnimation.x + jnGlobal.arrJnCosas[i].intAncho)))
            intNoColision = 0;
        else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnCosas[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnCosas[i].jnAnimation.y + jnGlobal.arrJnCosas[i].intLargo)))
            intNoColision = 0;
        else {
            if (jnGlobal.arrJnCosas[i].strTipo == "normal" || jnGlobal.arrJnCosas[i].strTipo == "nube") {
                if (jnGlobal.arrJnCosas[i].strTipo != "nube" && (jnEntidad.jnAnimation.y + jnEntidad.intLargo) > (jnGlobal.arrJnCosas[i].jnAnimation.y + jnGlobal.arrJnCosas[i].intLargo)) {
                    jnEntidad.jnAnimation.y = jnGlobal.arrJnCosas[i].jnAnimation.y + jnGlobal.arrJnCosas[i].intLargo;
                    jnEntidad.boolColisionY = true;
                }
                if (jnGlobal.arrJnCosas[i].strTipo != "nube" && jnEntidad.jnAnimation.y < jnGlobal.arrJnCosas[i].jnAnimation.y) {
                    jnEntidad.jnAnimation.y = jnGlobal.arrJnCosas[i].jnAnimation.y - jnEntidad.intLargo;
                    jnEntidad.boolColisionY = true;
                }
                /*if (jnGlobal.arrJnCosas[i].strTipo == "nube" && (jnEntidad.jnAnimation.y + jnEntidad.intLargo) < jnGlobal.arrJnCosas[i].jnAnimation.y) {
                 jnEntidad.jnAnimation.y = jnGlobal.arrJnCosas[i].jnAnimation.y - jnEntidad.intLargo;
                 jnEntidad.boolColisionY = true;
                 }*/
                if (jnGlobal.arrJnCosas[i].strTipo != "nube" && jnGlobal.arrJnCosas[i].strTipo_movimiento == "normal_movimiento" || jnGlobal.arrJnCosas[i].strTipo_movimiento == "normal_2_movimiento" && jnEntidad.strTipo == "personaje") {
                    jnEntidad.intTransporteX = jnGlobal.arrJnCosas[i].intDesplazamiento_x;
                    jnEntidad.boolColisionY = true;
                }
            }
            if (jnGlobal.arrJnCosas[i].strTipo == "escalera") {
                jnEntidad.boolColisionY = true;
                jnEntidad.boolColisionEscalaY = true;
                if (jnEntidad.boolUp) {
                    jnEntidad.boolEscalando = true;
                } else {
                    jnEntidad.boolEscalando = false;
                }
            }
            if (jnGlobal.arrJnCosas[i].strTipo == "clavo" && jnEntidad.strTipo == "personaje") {
                jnGlobal.jnPersonaje.boolEstado = false;
            }
        }
    }

    if (jnEntidad.boolColisionY) {
        //console.log("boolColisionY = " + jnGlobal.jnPersonaje.boolColisionY);
    } else {
        //console.log("boolColisionY = " + jnGlobal.jnPersonaje.boolColisionY);
    }
    return jnEntidad.boolColisionY;
}

function hayProximidad(jnEntidad) {
    var boolProximidad = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnCosas.length; i++) {
        if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) < jnGlobal.arrJnCosas[i].jnAnimation.x) || (jnEntidad.jnAnimation.x > (jnGlobal.arrJnCosas[i].jnAnimation.x + jnGlobal.arrJnCosas[i].intAncho)))
            intNoColision = 0;
        else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnCosas[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnCosas[i].jnAnimation.y + jnGlobal.arrJnCosas[i].intLargo)))
            intNoColision = 0;
        else {
            if (jnGlobal.arrJnCosas[i].strTipo != "escalera") {
                boolProximidad = true;
            }
        }
    }
    return boolProximidad;
}

function cogerMoneda(jnEntidad) {
    jnEntidad.boolColisionY = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnMonedas.length; i++) {
        if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnMonedas[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnMonedas[i].jnAnimation.x + jnGlobal.arrJnMonedas[i].intAncho)))
            intNoColision = 0;
        else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnMonedas[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnMonedas[i].jnAnimation.y + jnGlobal.arrJnMonedas[i].intLargo)))
            intNoColision = 0;
        else {
            createjs.Sound.play("pocima");
            jnGlobal.arrJnMonedas[i].jnAnimation.visible = false;
            jnGlobal.arrJnMonedas.splice(i, 1);
            jnEntidad.intPuntaje += 5;
            jnEntidad.intCantidadMonedas += 1;
            jnEntidad.intCantidadBalas += 1;

        }
    }
}

function cogerParteNave(jnEntidad) {
    jnEntidad.boolColisionY = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnNave.length; i++) {
        if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnNave[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnNave[i].jnAnimation.x + jnGlobal.arrJnNave[i].intAncho)))
            intNoColision = 0;
        else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnNave[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnNave[i].jnAnimation.y + jnGlobal.arrJnNave[i].intLargo)))
            intNoColision = 0;
        else {
            createjs.Sound.play("nave");
            jnGlobal.arrJnNave[i].jnAnimation.visible = false;
            jnGlobal.jnEtapa.getChildByName(jnGlobal.arrJnNave[i].strNombre).visible = true;
            jnGlobal.arrJnNave.splice(i, 1);
        }
    }
}

function matarEnemigo(jnEntidad) {
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        if (jnGlobal.arrJnEnemigos[i].boolEstado) {
            if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnEnemigos[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnEnemigos[i].jnAnimation.x + jnGlobal.arrJnEnemigos[i].intAncho)))
                intNoColision = 0;
            else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) != jnGlobal.arrJnEnemigos[i].jnAnimation.y))
                intNoColision = 0;
            else {
                createjs.Sound.play("matar");
                jnGlobal.jnPersonaje.boolSaltando = true;
                jnGlobal.jnPersonaje.intDesacelereacion = parseInt(1.2 * jnGlobal.jnPersonaje.intInicioDesacelereacion);
                jnGlobal.jnPersonaje.intAcelereacion = jnGlobal.jnPersonaje.intInicioAcelereacion;
                jnGlobal.arrJnEnemigos[i].boolEstado = false;
                jnGlobal.arrJnEnemigos[i].jnAnimation.gotoAndPlay("muerto");
            }
        }
    }
}

function hayColisionEnemigo(jnEntidad) {
    var boolColision = false;
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        if (jnGlobal.arrJnEnemigos[i].boolEstado) {
            if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnEnemigos[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnEnemigos[i].jnAnimation.x + jnGlobal.arrJnEnemigos[i].intAncho)))
                intNoColision = 0;
            else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnEnemigos[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnEnemigos[i].jnAnimation.y + jnGlobal.arrJnEnemigos[i].intLargo)))
                intNoColision = 0;
            else {
                boolColision = true;
            }
        }
    }
    return boolColision;
}

function hayColisionXEntreEnemigos(jnEntidad) {
    var intNoColision = 0;
    for (var i = 0; i < jnGlobal.arrJnEnemigos.length; i++) {
        if (jnGlobal.arrJnEnemigos[i].boolEstado) {
            if (((jnEntidad.jnAnimation.x + jnEntidad.intAncho) <= jnGlobal.arrJnEnemigos[i].jnAnimation.x) || (jnEntidad.jnAnimation.x >= (jnGlobal.arrJnEnemigos[i].jnAnimation.x + jnGlobal.arrJnEnemigos[i].intAncho)))
                intNoColision = 0;
            else if (((jnEntidad.jnAnimation.y + jnEntidad.intLargo) <= jnGlobal.arrJnEnemigos[i].jnAnimation.y) || (jnEntidad.jnAnimation.y >= (jnGlobal.arrJnEnemigos[i].jnAnimation.y + jnGlobal.arrJnEnemigos[i].intLargo)))
                intNoColision = 0;
            else {
                if ((jnEntidad.jnAnimation.x + jnEntidad.intAncho) > (jnGlobal.arrJnEnemigos[i].jnAnimation.x + jnGlobal.arrJnEnemigos[i].intAncho)) {
                    jnEntidad.jnAnimation.x = jnGlobal.arrJnEnemigos[i].jnAnimation.x + jnGlobal.arrJnEnemigos[i].intAncho;
                    jnEntidad.boolColisionX = hayColisionX(jnEntidad);
                    jnEntidad.boolColisionY = hayColisionY(jnEntidad);
                }
                if (jnEntidad.jnAnimation.x < jnGlobal.arrJnEnemigos[i].jnAnimation.x) {
                    jnEntidad.jnAnimation.x = jnGlobal.arrJnEnemigos[i].jnAnimation.x - jnEntidad.intAncho;
                    jnEntidad.boolColisionX = hayColisionX(jnEntidad);
                    jnEntidad.boolColisionY = hayColisionY(jnEntidad);
                }
            }
        }
    }
}