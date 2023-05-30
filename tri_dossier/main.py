from tkinter import *
import os
from time import sleep
class end:
    def __init__(self) -> None:
        self.root = Tk()
        self.root.resizable(False, False)
        Label(self.root, text="Le programmme vient de finir \nson execution, merci de relancer l'application \npour pouvoir effectuer une nouvelle procédure", height=5, width=50).pack()
        self.root.protocol("WM_DELETE_WINDOW", self.on_closing)
        self.root.mainloop()
    def on_closing(self):
        self.root.destroy()
        main()

class Page_manager:
    def __init__(self, rows) -> None:
        self.root = Tk()
        self.root.resizable(False, False)
        self.entries = []  # Liste pour stocker les entrées

        self.m = Frame(self.root)
        self.m.grid()
        self.btn = Button(self.root, command=self.get_entries)
        self.btn.grid()

        self.txt = ["chemin de départ", "chemin d'arrivé", "extension"]
        for y in range(3):
            self.l = Label(self.m, width=20, text=self.txt[y])
            self.l.grid(row=0, column=y)

        for y in range(rows):
            row_entries = []  # Liste pour stocker les entrées d'une ligne
            for x in range(3):
                self.var = StringVar()
                self.e = Entry(self.m, width=20, textvariable=self.var)
                self.e.grid(row=y+1, column=x)
                row_entries.append(self.var)  # Ajouter la variable de l'entrée à la liste
            self.entries.append(row_entries)  # Ajouter la liste des entrées de la ligne à la liste principale
        self.root.mainloop()
    def get_entries(self):
        values = []
        for row_entries in self.entries:
            row_values = []
            for entry_var in row_entries:
                row_values.append(entry_var.get())  # Récupérer la valeur de chaque entrée
            values.append(row_values)
        self.exe(values)
    def exe(self, values):
        #self.info_transert = Label(self.root, text="transfert 1, fichiers transferés 1/1")
        #self.info_transert.grid()
        for val in range(len(values)):
            self.ite(values[val], val)
        self.destroyed()
    def ite(self,values, nb_transfert):
        can = True
        n_fil = values[0]
        dir = values[1]
        ext = values[2]
        if not os.path.exists(n_fil):
            can = False
        if not os.path.exists(dir):
            can = False
        if ext not in ['.txt', '.docx', '.xlsx', '.pptx', '.pdf', '.jpg', '.png', '.gif', '.mp3', '.mp4', '.avi', '.zip', '.rar', '.py', '.html', '.css', '.js', '.cpp', '.java', '.php', '.odt']:
            can = False
        if can:
            for i in os.listdir(n_fil):
                extension = i.split('.')[-1]
                if f".{extension}" == ext:
                    sleep(0.1)
                    #self.info_transert.config(text=f"transfert {nb_transfert}, fichier {i}/{len(os.listdir(n_fil))} dans le dossier")
                    os.rename(f'{n_fil}\{i}', f'{dir}\{i}')
    def destroyed(self):
        self.root.destroy()
        end()
        

class main:
    def __init__(self) -> None:
        self.main = Tk()
        self.count = 0
        self.main.resizable(False, False)
        self.title_head = Label(self.main, text="Bienvenue dans le logiciel de tri de fichier ", height=4)
        self.title_head.grid()
        self.info_label = Label(self.main, text="Selectionner le nombre de transfert(s)")
        self.info_label.grid()
        self.spin_var = IntVar()
        self.nb_it_spin = Spinbox(self.main, from_=1, to=10, textvariable=self.spin_var)
        self.nb_it_spin.grid()

        self.btn_check = Button(self.main, text="Valider", command=self.manager_fils)
        self.btn_check.grid(row=3)
        self.main.mainloop()
    def manager_fils(self):
        self.main.destroy()
        Page_manager(self.spin_var.get())

main()