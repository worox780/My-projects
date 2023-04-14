import calculette
from random import randint

taille = int(input("taille de la carte \n"))
game = calculette.Game(taille, [randint(1, taille), randint(1, taille)])
play = game.play
print(game.position_apple)
while play:
    play = game.play
    if game.__player_moovement__():
        game.__map_generation__()
        game.__creation_back__()
        game.__player_generation__()
        game.__apple_generation__()
        game.__Print_plate__()