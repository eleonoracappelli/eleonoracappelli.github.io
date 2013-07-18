function beziera_2D(f){ return BEZIER(S1)(f)}
function beziera_1D(controlp){ return BEZIER(S0)(controlp)}
var dom1D = INTERVALS(1)(32)
var dom2D = DOMAIN([[0,1],[0,1]])([30,30])

function b_Dom1D(controlpoints){
    return MAP(BEZIER(S0)(controlpoints))(dom1D)
}

function b_Dom2D(functions){
    return MAP(BEZIER(S1)(functions))(dom2D) 
}


y = -0.15
y1 = -0.1
y2 = -0.08



xNero = beziera_1D([[0.3,0,1.53],[0.3,0,1.5]])
xNero1 = beziera_1D([[0.46,0,1.53],[0.46,0,1.5]])

xNero0 = beziera_1D([[0.3,0,1.4],[0.3,0,1.38]])
xNero11 = beziera_1D([[0.46,0,1.4],[0.46,0,1.38]])

xn1 = b_Dom2D([xNero11,xNero0])
xn = b_Dom2D([xNero1,xNero])

xBianco = beziera_1D([[0.3,0,1.5],[0.3,0,1.4]])
x1 = beziera_1D([[0.46,0,1.5],[0.46,0,1.4]])

xx = b_Dom2D([xBianco,x1])



xNeroUno = beziera_1D([[0.3,y,1.53],[0.3,y,1.5]])
uno = b_Dom2D([xNero,xNeroUno])

xNeroDue = beziera_1D([[0.46,y,1.53],[0.46,y,1.5]])
due = b_Dom2D([xNero1,xNeroDue])

xNeroTre = beziera_1D([[0.3,y,1.4],[0.3,y,1.38]])
tre = b_Dom2D([xNero0,xNeroTre])

xNeroQuattro = beziera_1D([[0.46,y,1.4],[0.46,y,1.38]])
quattro = b_Dom2D([xNero11,xNeroQuattro])


xCinque = beziera_1D([[0.3,y,1.5],[0.3,y,1.4]])
cinque = b_Dom2D([xBianco,xCinque])

x1Sei = beziera_1D([[0.46,y,1.5],[0.46,y,1.4]])
sei = b_Dom2D([x1,x1Sei])


spessPezzetto = STRUCT([COLOR([0,0,0])(STRUCT([uno,due,tre,quattro])),COLOR([3,3,3])(STRUCT([cinque,sei]))])
pezzettoSopra =  STRUCT([COLOR([0,0,0])(STRUCT([xn1,xn])),COLOR([3,3,3])(xx)])


x2 = beziera_1D([[0.3,0,1.38],[0.3,0,1.3],[0.29,0,1],[0.33,0,0.6],[0.29,0,0.4],[0.29,0,0.2],[0.27,0,0]])
x3 = beziera_1D([[0.46,0,1.38],[0.47,0,1.33],[0.47,0,1],[0.44,0,0.6],[0.39,0,0.4],[0.387,0,0.2],[0.35,0,0]])


x22 =beziera_1D([[0.3,y,1.38],[0.3,y,1.3],[0.29,y,1],[0.33,y1,0.6],[0.29,y1,0.4],[0.29,y2,0.2],[0.27,y2,0]])
x33 = beziera_1D([[0.46,y,1.38],[0.47,y,1.33],[0.47,y,1],[0.44,y1,0.6],[0.39,y1,0.4],[0.387,y2,0.2],[0.35,y2,0]])


xx1 = b_Dom2D([x2,x3])


xx11 = b_Dom2D([x22,x33])

spessY = STRUCT([b_Dom2D([x22,x2]),b_Dom2D([x3,x33])])

blu = COLOR([0,29/255,63/255])(STRUCT([xx1,xx11,spessY]))

gamba = STRUCT([pezzettoSopra,spessPezzetto,T([1])([y])(pezzettoSopra),blu])

legsx = T([0,1])([2.5,-0.15])(R([0,1])([PI])(gamba)) 




x = 1.58
yy = 0.08
ug = beziera_1D([[0.66,yy,1.53],[0.66,yy,1.5]])
ug1 = beziera_1D([[0.46+x-0.2,yy,1.53],[0.46+x-0.2,yy,1.5]])
unioneGambe1 = beziera_1D([[0.46+x,0,1.53],[0.46+x,0,1.5]])
uG = b_Dom2D([unioneGambe1,ug1,ug,xNero1])
unione_nero = COLOR([0,0,0])(uG)

ug1 = beziera_1D([[0.66,yy,1.4],[0.66,yy,1.38]])
ug2 = beziera_1D([[0.46+x-0.2,yy,1.4],[0.46+x-0.2,yy,1.38]])
unioneGambe3 = beziera_1D([[0.46+x,0,1.4],[0.46+x,0,1.38]])
uG1 = b_Dom2D([xNero11,ug1,ug2,unioneGambe3])
unione_nero1 = COLOR([0,0,0])(uG1)


ub = beziera_1D([[0.66,yy,1.5],[0.66,yy,1.4]])
ub1 = beziera_1D([[0.46+x-0.2,yy,1.5],[0.46+x-0.2,yy,1.4]])
unioneGambeBianco1 = beziera_1D([[0.46+x,0,1.5],[0.46+x,0,1.4]])
xx = b_Dom2D([x1,ub,ub1,unioneGambeBianco1])
unione_bianco = COLOR([3,3,3])(xx)

unione_gambe = STRUCT([unione_nero,unione_nero1,unione_bianco])
DRAW(unione_gambe)

gambaDietro = T([0,1])([0.45,-2])(R([0,1])([PI/2])(gamba))
gambaDietro1 = T([0,1])([2.05,0.5])(R([0,1])([-PI/2])(legsx))

gambe = STRUCT([gambaDietro,gambaDietro1,gamba,legsx])
DRAW(gambe)

////////////////



function laterali(curvaInizialeNero,curvaInizialeNero1,curvaInizialeBianco, param, h){
   mezzo = beziera_1D([[0.25+param,-0.7,1.53],[0.25+param,-0.7,1.5]])
ud = beziera_1D([[0.3+0.15+h,0-1.54,1.53],[0.3+0.15+h,0-1.54,1.5]])
unioneDietro = b_Dom2D([curvaInizialeNero,mezzo,ud])

mezzo1 = beziera_1D([[0.25+param,-0.7,1.4],[0.25+param,-0.7,1.38]])
ud1 = beziera_1D([[0.3+0.15+h,0-1.54,1.4],[0.3+0.15+h,0-1.54,1.38]])
unioneDietro1 = b_Dom2D([curvaInizialeNero1,mezzo1,ud1])

mezzo2 = beziera_1D([[0.25+param,-0.7,1.5],[0.25+param,-0.7,1.4]])
ud2 = beziera_1D([[0.3+0.15+h,0-1.54,1.5],[0.3+0.15+h,0-1.54,1.4]])
unioneDietro2 = b_Dom2D([curvaInizialeBianco,mezzo2,ud2])
unioneD = STRUCT([COLOR([0,0,0])(unioneDietro),COLOR([0,0,0])(unioneDietro1),COLOR([3,3,3])(unioneDietro2)])
return unioneD
}



l = laterali(xNeroUno,xNeroTre,xCinque,0,0)
DRAW(l)



trasl = 1.74
param = 0.25+ trasl
h=0.16+1.45-0.01
xNeroDueTrasl = beziera_1D([[0.46+trasl,y,1.53],[0.46+trasl,y,1.5]])

xNeroQuattroTrasl = beziera_1D([[0.46+trasl,y,1.4],[0.46+trasl,y,1.38]])

x1SeiTrasl = beziera_1D([[0.46+trasl,y,1.5],[0.46+trasl,y,1.4]])

l1 = laterali(xNeroDueTrasl,xNeroQuattroTrasl,x1SeiTrasl,param,h)
DRAW(l1)

//dietro 

me = beziera_1D([[0.46+0.79,-1.7-0.16,1.53],[0.46+0.79,-1.7-0.16,1.5]])
me1 = beziera_1D([[0.46+0.79,-1.7-0.16,1.4],[0.46+0.79,-1.7-0.16,1.38]])
me2 = beziera_1D([[0.46+0.79,-1.7-0.16,1.5],[0.46+0.79,-1.7-0.16,1.4]])

uc = beziera_1D([[0.46-0.01,-1.54-0.16,1.53],[0.46-0.01,-1.54-0.16,1.5]])
uc1 = beziera_1D([[0.46-0.01,-1.54-0.16,1.4],[0.46-0.01,-1.54-0.16,1.38]])
uc2 = beziera_1D([[0.46-0.01,-1.54-0.16,1.5],[0.46-0.01,-1.54-0.16,1.4]])
h=0.16+1.45-0.01
ud = beziera_1D([[0.3+0.15+h,-1.54-0.16,1.53],[0.3+0.15+h,-1.54-0.16,1.5]])
ud1 = beziera_1D([[0.3+0.15+h,-1.54-0.16,1.4],[0.3+0.15+h,-1.54-0.16,1.38]])
ud2 = beziera_1D([[0.3+0.15+h,-1.54-0.16,1.5],[0.3+0.15+h,-1.54-0.16,1.4]])

U  = b_Dom2D([uc,me,ud])
U1 = b_Dom2D([uc1,me1,ud1])
U2 = b_Dom2D([uc2,me2,ud2])
dietro = STRUCT([COLOR([0,29/255,63/255])(U1),COLOR([0,29/255,63/255])(U),COLOR([3,3,3])(U2)])
DRAW(dietro)

/* esempio patch coons
var latoSx = beziera_1D([[4.071,3,0],[4.59,8,-1.2]])
var latoDx = beziera_1D([[6.9,3,0.01],[6.42,8,-1.2]])
var latoSotto = beziera_2D([[4.071,3,0],[5.5,2.8,0],[6.9,3,0.01]])
var latoSopra = beziera_2D([[4.59,8,-1.2],[5.5,8.3,-1.2],[6.42,8,-1.2]])

var out = MAP(COONS_PATCH([latoSx,latoDx,latoSotto,latoSopra]))(dom2D);*/



lato_dietro =beziera_1D([[0.46-0.01,-1.54-0.16,1.53],[0.46+0.79,-1.7-0.16,1.53],[0.3+0.15+h,-1.54-0.16,1.53]])
lato_davanti = beziera_1D([[0.46,0,1.53],[0.66,yy,1.53],[0.46+x-0.2,yy,1.53],[0.46+x,0,1.53]])
var out = b_Dom2D([lato_davanti,lato_dietro]);
DRAW(COLOR([1,0,0])(out))

lato_sinistro = beziera_1D([[0.46,0,1.53],[0.46,-1.54-0.16,1.53]])
lato_sx = beziera_1D([[0.3,0,1.53],[0.3,y,1.53],[0.22,-0.7,1.53],[0.3+0.15,0-1.54,1.53]])
var out = b_Dom2D([lato_sinistro,lato_sx]);
DRAW(COLOR([1,0,0])(out))

lato_destro = beziera_1D([[0.46+x,0,1.53],[0.46+x,-1.54-0.16,1.53]])
lato_dx = beziera_1D([[0.46+trasl,0,1.53],[0.46+trasl,y,1.53],[0.28+param,-0.7,1.53],[0.3+0.15+h,0-1.54,1.53]])
var out = b_Dom2D([lato_destro,lato_dx]);
DRAW(COLOR([1,0,0])(out))


//cuscino

zeta = 0.08
ddd=0.08
lato_dietro1 =beziera_1D([[0.46-0.01,-1.54-0.16+ddd,1.53+zeta],[0.46+0.79,-1.7-0.16+ddd,1.53+zeta],[0.3+0.15+h,-1.54-0.16+ddd,1.53+zeta]])
lato_davanti1 = beziera_1D([[0.46,0,1.53+zeta],[0.66,yy,1.53+zeta],[0.46+x-0.2,yy,1.53+zeta],[0.46+x,0,1.53+zeta]])

zetaAdd = 0.12
rialzo_cuscino = beziera_1D([[0.46-0.01-0.05,-0.85,1.53+zeta+zetaAdd],[0.46+0.79,-0.85,1.53+zeta+0.5],[0.3+0.15+h+0.05,-0.85,1.53+zeta+zetaAdd]])
//DRAW(b_Dom2D([lato_dietro1,lato_dietro]))
cuscino_part1 = COLOR([0,20/255,60/255])(STRUCT([b_Dom2D([lato_davanti1,lato_davanti]),b_Dom2D([lato_davanti1,rialzo_cuscino,lato_dietro1])]))

lato_dx1 = beziera_1D([[0.46+trasl+0.01,0,1.53+zeta],[0.46+trasl+0.03,y,1.53+zeta],[0.28+param+0.03,-0.7,1.53+zeta],[0.3+0.15+h+0.03,0-1.54,1.53+zeta]])
lato_sx1 = beziera_1D([[0.3-0.01,0,1.53+zeta],[0.3-0.03,y,1.53+zeta],[0.22-0.03,-0.7,1.53+zeta],[0.3+0.15-0.03,0-1.54,1.53+zeta]])

l_sx = beziera_1D([[0.46,0,1.53+zeta],[0.46-0.01-0.05,-0.85,1.53+zeta+zetaAdd],[0.46-0.01,-1.54-0.16,1.53+zeta]])
l_dx = beziera_1D([[0.46+x,0,1.53+zeta],[0.3+0.15+h+0.05,-0.85,1.53+zeta+zetaAdd],[0.3+0.15+h,-1.54-0.16,1.53+zeta]])

//aggiungi curva vicina a lato_sx1 e una a lato_dx1
//lato_l_sx1 = beziera_1D([[0.3+0.01,0,1.53+zeta+0.05],[0.3-0.01,y,1.53+zeta+0.05],[0.22-0.01,-0.7,1.53+zeta+0.05],[0.3+0.15-0.01,0-1.54,1.53+zeta+0.05]])
//lato_l_dx1 = beziera_1D([[0.46+trasl-0.01,0,1.53+zeta+0.05],[0.46+trasl+0.01,y,1.53+zeta+0.05],[0.28+param+0.01,-0.7,1.53+zeta+0.05],[0.3+0.15+h+0.01,0-1.54,1.53+zeta+0.05]])


cuscino_part2 = COLOR([0,20/255,60/255])(STRUCT([b_Dom2D([l_sx,lato_sx1]),b_Dom2D([l_dx,lato_dx1])]))
cuscino_part3 = COLOR([0,20/255,60/255])(STRUCT([b_Dom2D([lato_dx,lato_dx1]),b_Dom2D([lato_sx,lato_sx1])]))




c_p = b_Dom2D([beziera_1D([[0.3-0.01,0,1.53+zeta],[0.46,0,1.53+zeta]]),beziera_1D([[0.3,0,1.53],[0.46,0,1.53]])])
c_p1 = b_Dom2D([beziera_1D([[0.46+trasl+0.01,0,1.53+zeta],[0.46+x,0,1.53+zeta]]),beziera_1D([[0.46+trasl,0,1.53],[0.46+x,0,1.53]])])

cuscino_part4 = COLOR([0,20/255,60/255])(STRUCT([c_p,c_p1]))

finale = beziera_1D([[0.3+0.15+h,0-1.54,1.53],[0.3+0.15+h,-1.54-0.16,1.53]])
finale1 = beziera_1D([[0.3+0.15+h+0.03,0-1.54,1.53+zeta],[0.3+0.15+h,-1.54-0.16,1.53+zeta]])
fin = b_Dom2D([finale,finale1])

finale2 = beziera_1D([[0.3+0.15,0-1.54,1.53],[0.46-0.01,-1.54-0.16,1.53]])
finale3 = beziera_1D([[0.3+0.15-0.03,0-1.54,1.53+zeta],[0.46-0.01,-1.54-0.16,1.53+zeta]])
fin1 = b_Dom2D([finale2,finale3])

cuscino_part5 = COLOR([3,3,3])(STRUCT([fin,fin1]))

cuscino = STRUCT([cuscino_part1,cuscino_part2,cuscino_part3,cuscino_part4,cuscino_part5])
DRAW(cuscino)

//schienale
//prendi punti iniziale e finale di lato_dietro1 
r = 0.1
ld =b_Dom1D([[0.46-0.01,-1.54-0.16+ddd+0.07,1.53+zeta],[0.46-0.01-0.05,-1.54-0.16+ddd-r,3.4],[0.46-0.01-0.14,-1.54-0.16+ddd-r+0.05,3.6],[0.46-0.01-0.17,-1.54-0.16+ddd-r,4]])
ld1 =b_Dom1D([[0.46-0.01,-1.54-0.16,1.53],[0.46-0.01-0.05,-1.54-0.16+0.05-r,3.4],[0.46-0.01-0.14,-1.54-0.16+ddd-r,3.6],[0.46-0.01-0.17,-1.54-0.16+ddd-r,4]])
DRAW(ld)
DRAW(ld1)


//[0.3+0.15+h,-1.54-0.16+ddd,1.53+zeta]