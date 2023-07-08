from tkinter import *
import os
from end import end

class Page_manager:
    def __init__(self, rows, langage:int) -> None:
        self.root = Tk() #création de la fenêtre
        self.root.geometry("+50+50")  #fenêtre à la taille qui s'addapte
        self.root.resizable(False, False) #non redimensionnable
        self.sentence = [["démarer le processus", "chemin de départ", "chemin d'arrivé", "extension"], ["Start the process", "path from", "path to", "extension"]] #texte des langues
        self.langage = langage #variable pour connaître la langue
        self.entries = []  # Liste pour stocker les entrées

        self.m = Frame(self.root) #support pour inscrire le tableur
        self.m.grid()
        self.btn = Button(self.root, command=self.get_entries, text=self.sentence[self.langage][0]) #bouton pour récuperer les entrers et lancer le process
        self.btn.grid()

        for y in range(3): #title table generation
            self.l = Label(self.m, width=20, text=self.sentence[self.langage][y+1])
            self.l.grid(row=0, column=y)

        for y in range(rows): #table generation
            row_entries = []  #Array entry
            for x in range(3):
                self.var = StringVar() 
                self.e = Entry(self.m, width=20, textvariable=self.var)
                self.e.grid(row=y+1, column=x)
                row_entries.append(self.var)  #append entry var in a tiny array
            self.entries.append(row_entries)  #append all entry var of a row in an array
        self.root.mainloop()
    def get_entries(self): #collect all information of the entry, call when button btn pressed
        values = []
        for row_entries in self.entries:
            row_values = []
            for entry_var in row_entries:
                row_values.append(entry_var.get())  #collect information of any rows
            values.append(row_values)
        self.exe(values)
    def exe(self, values): #function of iteration
        for val in range(len(values)):
            self.iteration(values[val])
        self.destroyed() #call the next page after the process
    def iteration(self,values): #process
        can = True
        n_fil = values[0]
        dir = values[1]
        ext = values[2]
        if not os.path.exists(n_fil): #vérification de l'éxistence du chemin de départ
            can = False
        if not os.path.exists(dir): #vérification de l'éxistence du chemin d'arrivé
            can = False
        if ext not in ['.txt', '.docx', '.xlsx', '.pptx', '.pdf', '.jpg', '.png', '.gif', '.mp3', '.mp4', '.avi', '.zip', '.rar', '.py', '.html', '.css', '.js', '.cpp', '.java', '.php', '.odt']: #vérification de la validité d'une extension
            can = False
        if can:
            for i in os.listdir(n_fil): #boucle en fonction du nombre de fichiers
                extension = i.split('.')[-1] #récupération de l'extension
                if f".{extension}" == ext: #vérification de l'existence de l'extension du fichier
                    #self.info_transert.config(text=f"transfert {nb_transfert}, fichier {i}/{len(os.listdir(n_fil))} dans le dossier")
                    os.rename(f'{n_fil}\{i}', f'{dir}\{i}') #déplacer le fichier
    def destroyed(self): #fonction de déstruction de la page et d'appel de la page end
        self.root.destroy()
        end(self.langage)


class PageSortExt: #page de paramétrage du process extension 
    def __init__(self, langage=0) -> None:
        self.main = Tk()
        self.main.geometry("250x250+50+50")
        self.sentence = [["Bienvenue dans le logiciel de tri de fichier", "Selectionner le nombre de transfert(s)", "Valider"], ["Welcome on your fils manager", "Select the number of iteration(s)", "Validate"]]
        self.langage = langage
        self.count = 0
        self.main.resizable(False, False)
        self.title_head = Label(self.main, text=self.sentence[self.langage][0], height=4)
        self.title_head.pack()
        self.info_label = Label(self.main, text=self.sentence[self.langage][1])
        self.info_label.pack()  
        self.spin_var = IntVar()
        self.nb_it_spin = Spinbox(self.main, from_=1, to=10, textvariable=self.spin_var)
        self.nb_it_spin.pack()

        self.btn_check = Button(self.main, text=self.sentence[self.langage][2], command=self.ManagerFils)
        self.btn_check.pack()
        self.main.mainloop()
    def ManagerFils(self):
        self.main.destroy()
        Page_manager(self.spin_var.get(), self.langage)