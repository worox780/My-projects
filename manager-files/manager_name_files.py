import os
from tkinter import *
from end import end


class Page_manager:
    def __init__(self, langage:int) -> None:
        self.root = Tk() #fenêtre
        self.root.geometry("+50+50") #position
        #langue
        self.sentence = [["chemin du répertoire\ndes fichiers à transferer", "chemin d'arriver", "découpage de mots", "démarer le processus"], ["chemin du répertoire\ndes fichiers à transferer", "chemin d'arriver", "découpage de mots", "démarer le processus"]]
        self.langage = langage #nom de la langue
        self.root.resizable(False, False) #non redimenssionable
        self.lst_repertoire = [] #liste des chemins des dossiers
        for y in range(3): #title table generation
            self.l = Label(self.root, width=20, text=self.sentence[self.langage][y]) #génération des titres
            self.l.grid(row=0, column=y) #affichage des titres
        self.var_entry_start = StringVar() #variable pour l'entry start
        self.entry_start = Entry(self.root, width=20, textvariable=self.var_entry_start) #entry pour le chemin de départ
        self.entry_start.grid(row=1, column=0) #affichage de l'entry start
        self.var_entry_end = StringVar() #variable pour l'entry end
        self.entry_end = Entry(self.root, width=20, textvariable=self.var_entry_end) #entry pour le chemin d'arrivé
        self.entry_end.grid(row=1, column=1) #affichage de l'entry end
        self.var_entry_cut = StringVar() #variable pour l'entry cut
        self.entry_cut = Entry(self.root, width=20, textvariable=self.var_entry_cut) #entry pour le découpage des fichiers
        self.entry_cut.grid(row=1, column=2) #affichage de l'entry cut
        self.btn_process = Button(self.root, text=self.sentence[self.langage][3], command=self.CanProcess) #Bouton pour lancer le processus
        self.btn_process.grid(row=2, column=1) #affichage du bouton pour lancer le processus
        self.root.mainloop() #boucle de la fenêtre
    
    def CanProcess(self): #vérification de l'existence du chemin de départ et d'arrivé
        if os.path.exists(self.var_entry_start.get()) and os.path.exists(self.var_entry_end.get()):
            self.Process() #si oui, appel de la méthode process
        self.destroyed() #appel de la méthode destroyed
    def Process(self):
        for i in os.listdir(self.var_entry_end.get()): #lecture de tous les fichiers du dossier d'arrivé
            if os.path.isdir(f'{self.var_entry_end.get()}\{i}'): #si le fichier est un dossier
                self.lst_repertoire.append(i) #regroupement des dossiers existant dans la variable liste
        for file_start in os.listdir(self.var_entry_start.get()): #lecture de les fichiers dans le dossier de départ
            if not os.path.isdir(f'{self.var_entry_start.get()}\{i}'): #si il ne s'git pas d'un dossier
                fl = file_start.split(self.var_entry_cut.get()) #On découpe le nom du fichier en fonction du préset cut
                can_add_fil_path_other:bool = True #savoir si le fichier peut être mis dans le fichier other
                for each_file in self.lst_repertoire: #lecture de tout les nom de dossier du dossier d'arrivé
                    for i in fl: #lecture des mots du fichier actuellement découpé
                        if i == each_file: #si un des mots correspond
                            #on déplace le fichier
                            os.rename(f'{self.var_entry_start.get()}\{file_start}', f'{self.var_entry_end.get()}\{each_file}\{file_start}')
                            can_add_fil_path_other = False #on empêche son déplacement dans le fichier others
                            break #on casse la boucle
                if can_add_fil_path_other: #si le fichier peut être déplacé dans le fichier other
                    if not os.path.isdir(f'{self.var_entry_end.get()}\other'):
                        os.mkdir(f"{self.var_entry_end.get()}\other")
                    os.rename(f'{self.var_entry_start.get()}\{file_start}', f'{self.var_entry_end.get()}\other\{file_start}')
                        
    def destroyed(self):
        self.root.destroy()
        end(self.langage)
