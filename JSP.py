from random import randint


def cordonne_rota(x, y, lst):
    m = 0
    lst.insert(0, [x, y])
    for size in range(len(lst)):
        if (size < len(lst) - 1):
            if lst[size][0] == lst[size + 1][0]:
                m += abs(lst[size][1] - lst[size - 1][1])
                if m > size_player:
                    for i in range(size, len(lst) - 2):
                        lst.pop(i)
                    break

            else:
                m += abs(lst[size][0] - lst[size - 1][0])
                if m > size_player:
                    for i in range(size, len(lst) -2):
                        lst.pop(i)
                    break
    return lst


def crea_arriere_lst():
    global cor_actu_player_all
    global cor_old_player
    #position dans ma taille du player
    nombre_de_pas = 0
    #liste des coordonnées de chacuns de memebres du player
    m = []
    #une boucle qui tourne sur le nombre de membres du player
    for nb in range(len(cor_actu_player_all)):

        #si c'est la première rotation
        if len(cor_actu_player_all) == 1:
            m.append([cor_actu_player[0], cor_actu_player[1]])
            cor_actu_player_all = [[cor_actu_player[0], cor_actu_player[1]]]
        else:
            if nb == 0: 
                m[0].append(cor_actu_player[0])
                m[0].append(cor_actu_player[1])   
                pass
            else:
                cor_x = cor_actu_player_all[nb][0]
                cor_y = cor_actu_player_all[nb][1]

                m[nb].append(cor_actu_player[0])
                m[nb].append(cor_actu_player[1])

    return m


def affichage(lst):
    for i in lst:
        print(i)
    pass


def show_arriere():
    global posi_coin
    global size_player
    global cor_actu_player_all
    n = crea_arriere_lst()
    posi = 0
    m = []

    for x in range(taille + 2):
        m.append([])
        for y in range(taille + 2):
            if x == 0 or x == taille + 1:
                m[x].append("/")
            else:
                if y == 0 or y == taille + 1:
                    m[x].append("/")
                else:
                    m[x].append("-")

    #afficher le personnage
    for i in range(len(n)):
        m[n[i][0]][n[i][1]] = "x"
    
    #si on est sur la position du coin
    if (cor_actu_player == posi_coin) or (nb_tour < 1):
        size_player += 1
        print("size du player : ", size_player)
        while True:
            posix = randint(0, taille)
            posiy = randint(0, taille)

            if m[posix][posiy] == "-":
                m[posix][posiy] = "o"
                posi_coin = [posix, posiy]
                size = len(cor_actu_player_all)
                cor_x = cor_actu_player_all[size - 1][0]
                cor_y = cor_actu_player_all[size - 1][1]
                #cor_actu_player_all.append([cor_x, cor_y])
                break

    else:
        m[posi_coin[0]][posi_coin[1]] = "o"
        pass
    
    print("nb tour", nb_tour)
    #affichage de la carte
    affichage(m)


def posi_player():
    #les global
    global play
    global cor_actu_player
    global cordoné_rota
    global old_rota
    global new_rota
    #nouvelle coordonné
    #diréction
    dir = input()
    #si clické sur les lettres pour avancer
    #on retire 1 en x
    if (dir[0] in "aA"): 
        new_rota = "aA"
        cor_actu_player[1] -= 1
    #on ajoute 1 en x
    elif (dir[0] in "dD"): 
        new_rota = "dD"
        cor_actu_player[1] += 1
    #on retire 1 en y
    elif (dir[0] in "zZ"): 
        new_rota = "zZ"
        cor_actu_player[0] -= 1
    #on ajoute 1 en y
    elif (dir[0] in "sS"): 
        new_rota = "sS"
        cor_actu_player[0] += 1
    #on arrête
    else: play = False


    #vérifier qu'il est bien dans la zone de jeu
    if cor_actu_player[0] > 0 and cor_actu_player[0] < taille + 1 and cor_actu_player[1] > 0 and cor_actu_player[1] < taille + 1:
        #nouvelle coordonné de tête
        if (new_rota != old_rota) and size_player > 1:
            print("dif")
            print("old cordonné rota : ", cordoné_rota)
            cordoné_rota = cordonne_rota(cor_actu_player[0], cor_actu_player[1], cordoné_rota)
            print("new cordonné rota : ", cordoné_rota)

        print("cordonné rota : ", cordoné_rota)
        #afficher la nouvelle map
        show_arriere()
    #si on est sortie de la grille
    else:
        print("You have loose")
        play = False


#taille de la carte
taille = int(input())
if taille < 5:
    taille = 5
elif taille > 20:
    taille = 20
#coordonné de rotation du player
cordoné_rota = []
#coordonné de toute la chenille
cor_actu_player_all = [[1, 1]]
#coordonné de la tête de la chenille
cor_actu_player = [1,1]
#ancienne coordonné de la tête de la chenille
cor_old_player = [1,1]
#ancien coup
old_rota = "aA"
#nouveau coup
new_rota = "aA"
#taille du player
size_player = 1
#bool pour l'activation du player
play = True
#la position du coin sur la map
posi_coin = [randint(2, taille), randint(2, taille)]
#le nombre de tour
nb_tour = 1
#faire une génération de la map
show_arriere()


while play == True:
    #faire l'appel de la fonction pour le déplacement
    posi_player()
    print("position de la tête : ", cor_actu_player)
    print("position de tout le corp : ", cor_actu_player_all)
    #on rajoute 1 au nombre de tour
    nb_tour += 1

"""
import matplotlib.pyplot as plt
import random as rd

def Acceuille() -> None:
    print("bienveunu sur un algorithme d'Intelligence Artificielle \n" 
    "de primier niveau pour le :\n"
    "Pierre, Feuille, Ciseau.")

def Choix_Acceuille() -> int:
    print("1 pour jouer contre l'Intelligence Artificielle\n"
    "2 pour quitter")

    choix = int(input("Que veux-tu faire ?"))
    if choix == 1: return 1
    elif choix == 2: return 2

def Jeux_IA():
    global Player1
    global Player2
    global Win
    global taille
    print("Bienveue dans le gmode :\n"
    "jouer contre l'Intelligence Artificielle")

    nombre_tour = int(input("nombre de tours ?"))

    for i in range(nombre_tour):
        taille.append(i)
        player = int(input())
        Player1.append(player)

        IA = rd.randint(1, 3)
        Player2.append(IA)
        

        if player == 1 and IA == 2:
            Win.append(1)
        elif player == 2 and IA == 1:
            Win.append(2)


        elif player == 2 and IA == 3:
            Win.append(1)
        elif player == 3 and IA == 2:
            Win.append(2)
        
        elif player == 3 and IA == 1:
            Win.append(1)
        elif player == 1 and IA == 3:
            Win.append(2)
        
        else:
            Win.append(0)
        
        
    print(Player1)
    print(Player2)
    print(Win)
    

Player1 = []
Player2 = []
taille = []
Win = []

run = True
run_intro = True
Acceuille()
print()

position_lst = 1

while run:
    if Choix_Acceuille() == 1:
        Jeux_IA()
    elif Choix_Acceuille() == 2: run = False
    else: print("mauvaise manipulation")


plt.plot(taille, Win)
plt.show()
"""