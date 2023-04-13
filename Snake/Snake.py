import calculette
from random import randint
taille = int(input("taille de la carte \n"))
print("size check")
game = calculette.Game(taille, [randint(1, taille), randint(1, taille)])
print("upload check")
play = game.play
print("play check")
while play:
    print("in check")
    play = game.play
    print("upload play check")
    if game.__player_moovement__():
        print("moovement check")
        print(game.map_gene)
        game.__map_generation__()
        print("gene map check")
        print(game.map_gene)
        game.__creation_back__()
        print(game.map_gene)
        game.__player_generation__()
        print(game.map_gene)
        game.__apple_generation__()
        print(game.map_gene)
        game.__Print_plate__()
    else:
        print("by pass not good")




"""from random import randint
import os
from time import sleep

def crea_arriere_lst():
    #les globals
    global old_size

    #liste des coordonnées de chacuns de memebres du player
    m = cor_actu_player_all
    
    #modification du player
    if old_size == size_player:
        m.insert(0,cor_actu_player)
        m.pop(len(cor_actu_player_all) - 1)
    else:
        m.insert(0,cor_actu_player)
        old_size = size_player

    return m


def affichage(lst):
    os.system('cls')
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
    global old_rota
    global new_rota
    #nouvelle coordonné
    #diréction
    dir = input()
    #si clické sur les lettres pour avancer
    #on retire 1 en x
    if (dir[0] in "aA") and new_rota != "dD":
        new_rota = "aA"
        cor_actu_player[1] -= 1
    #on ajoute 1 en x
    elif (dir[0] in "dD") and new_rota != "aA":
        new_rota = "dD"
        cor_actu_player[1] += 1
    #on retire 1 en y
    elif (dir[0] in "zZ") and new_rota != "sS":
        new_rota = "zZ"
        cor_actu_player[0] -= 1
    #on ajoute 1 en y
    elif (dir[0] in "sS") and new_rota != "zZ":
        new_rota = "sS"
        cor_actu_player[0] += 1
    #on arrête
    else: play = False


    #vérifier qu'il est bien dans la zone de jeu
    if cor_actu_player[0] > 0 and cor_actu_player[0] < taille + 1 and cor_actu_player[1] > 0 and cor_actu_player[1] < taille + 1:
        
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
#coordonné de toute la chenille
cor_actu_player_all = [[1, 1]]
#coordonné de la tête de la chenille
cor_actu_player = [1,1]
#ancien coup
old_rota = "aA"
#nouveau coup
new_rota = "aA"
#taille du player
size_player = 1
old_size = 1
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
    print("player size : ", size_player)
    #on rajoute 1 au nombre de tour
    nb_tour += 1
"""