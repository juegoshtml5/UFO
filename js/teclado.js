function operaEvento(event) {
    if (event.type == "keydown") {
        if (jnGlobal.jnPersonaje.strUltimoEvento && jnGlobal.jnPersonaje.strUltimoEvento.keyCode == event.keyCode) {
            return;
        } else {
            if (event.which == 65) {
                jnGlobal.jnPersonaje.boolDisparando = true;
                animaciones();
            }
            if (event.which == 16) {
                jnGlobal.jnPersonaje.intVelocidadHorizontal = 50;
            }
            if (event.which == 37) {
                jnGlobal.jnPersonaje.boolLeft = true;
                jnGlobal.jnPersonaje.boolProximidad = hayProximidad(jnGlobal.jnPersonaje);
                if (jnGlobal.jnPersonaje.boolProximidad) {
                    if (jnGlobal.jnPersonaje.strUltimoSentidoX == "right" && jnGlobal.jnPersonaje.boolContactoSuelo) {
                        jnGlobal.jnPersonaje.boolSaltando = true;
                        jnGlobal.jnPersonaje.intDesacelereacion = jnGlobal.jnPersonaje.intInicioDesacelereacion;
                        jnGlobal.jnPersonaje.intAcelereacion = jnGlobal.jnPersonaje.intInicioAcelereacion;
                        createjs.Sound.play("salto");
                    }
                }
                jnGlobal.jnPersonaje.strUltimoSentidoX = "left";
                animaciones();
            }
            var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
            if (event.which == 38 && !jnGlobal.jnPersonaje.boolVolando && !boolEscaleraColision) {
                jnGlobal.jnPersonaje.boolSaltando = true;
                jnGlobal.jnPersonaje.boolUp = true;
                animaciones();
                createjs.Sound.play("salto");
            }
            if (event.which == 38 && !jnGlobal.jnPersonaje.boolVolando && boolEscaleraColision) {
                jnGlobal.jnPersonaje.boolEscalando = true;
                jnGlobal.jnPersonaje.boolUp = true;
                animaciones();
            }
            if (event.which == 39) {
                jnGlobal.jnPersonaje.boolRight = true;
                jnGlobal.jnPersonaje.boolProximidad = hayProximidad(jnGlobal.jnPersonaje);
                if (jnGlobal.jnPersonaje.boolProximidad) {
                    if (jnGlobal.jnPersonaje.strUltimoSentidoX == "left" && jnGlobal.jnPersonaje.boolContactoSuelo) {
                        jnGlobal.jnPersonaje.boolSaltando = true;
                        jnGlobal.jnPersonaje.intDesacelereacion = jnGlobal.jnPersonaje.intInicioDesacelereacion;
                        jnGlobal.jnPersonaje.intAcelereacion = jnGlobal.jnPersonaje.intInicioAcelereacion;
                        createjs.Sound.play("salto");
                    }
                }
                jnGlobal.jnPersonaje.strUltimoSentidoX = "right";
                animaciones();
            }
            if (event.which == 40 && boolEscaleraColision && !jnGlobal.jnPersonaje.boolVolando) {
                jnGlobal.jnPersonaje.boolDown = true;
                jnGlobal.jnPersonaje.boolEscalando = true;
                animaciones();
            }
        }
        jnGlobal.jnPersonaje.strUltimoEvento = event;
        jnGlobal.jnPersonaje.arrTeclas[event.keyCode] = true;
    } else {
        if (event.which == 65) {
            jnGlobal.jnPersonaje.boolDisparando = false;
            animaciones();
        }
        if (event.which == 16) {
            jnGlobal.jnPersonaje.intVelocidadHorizontal = 20;
        }
        if (event.which == 37) {
            jnGlobal.jnPersonaje.boolLeft = false;
            animaciones();
        }
        if (event.which == 38) {
            jnGlobal.jnPersonaje.boolUp = false;
            jnGlobal.jnPersonaje.boolSaltoPared = false;
            jnGlobal.jnPersonaje.boolEscalando = false;
            var boolEscaleraColision = jnGlobal.jnPersonaje.boolColisionEscalaX && jnGlobal.jnPersonaje.boolColisionEscalaY;
            if (boolEscaleraColision) {
                jnGlobal.jnPersonaje.jnAnimation.gotoAndStop("escalando");
            }
            animaciones();
        }
        if (event.which == 39) {
            jnGlobal.jnPersonaje.boolRight = false;
            animaciones();
        }
        if (event.which == 40) {
            jnGlobal.jnPersonaje.boolDown = false;
            jnGlobal.jnPersonaje.boolEscalando = false;
            animaciones();
        }
        jnGlobal.jnPersonaje.strUltimoEvento = null;
    }
}
;


