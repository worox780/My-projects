grille = []
taille = int(input())
carre = [int(loop) for loop in range(1, taille**2 + 1)]

for i in range(taille):
    grille.append(list(map(int, input().split(" "))))
somme_magique = (taille * (taille**2 + 1)) // 2
# Vérifier que chaque nombre n'apparaît qu'une seule fois

print(carre)
print(grille)
"""

nombres = set()
for i in range(taille):
    for j in range(taille):
        nombres.add(grille[i][j])
if len(nombres) != taille**2:
    print("no")
    exit()
# Vérifier que la somme de chaque rangée, colonne et diagonale est égale à la somme magique
for i in range(taille):
    somme_rangee = 0
    somme_colonne = 0
    for j in range(taille):
        somme_rangee += grille[i][j]
        somme_colonne += grille[j][i]
    if somme_rangee != somme_magique or somme_colonne != somme_magique:
        print("no")
        exit()
    somme_diagonale_1 = 0
    somme_diagonale_2 = 0
    for i in range(taille):
        somme_diagonale_1 += grille[i][i]
        somme_diagonale_2 += grille[i][taille-1-i]
    if somme_diagonale_1 != somme_magique or somme_diagonale_2 != somme_magique:
        print("no")
        exit()



print("yes")
"""