from tkinter import *
import manager_ext_files
import manager_name_files
        

class Main:
    def __init__(self) -> None:
        self.main = Tk() #création de la fenêtre
        self.main.geometry("+50+50") #fenêtre à la taille qui s'addapte
        self.main.resizable(False, False) #non redimensionnable
        self.langage = ["French", "English"] #liste des langue disponible
        Label(self.main, text="choose your langage").pack()
        self.var_listbox = StringVar() #variable pour le listbox des langue
        self.var_listbox = "English" #langue prédéfinie sur Anglais
        self.listbox = Listbox(self.main, selectmode=SINGLE, listvariable=self.var_listbox) #création de la listbox
        self.listbox.insert(END, "French") #ajout du français dans la listbox à la fin
        self.listbox.insert(END, "English") #ajout de l'anglais dans la listbox à la fin
        self.listbox.pack()
        self.listbox.bind('<<ListboxSelect>>', self.on_select)

        self.var_radio_page = IntVar() #variable du radiobutton pour le choix du type d'action
        self.radio_ex_page = Radiobutton(self.main, text="Sort your files by extension", variable=self.var_radio_page, value=0)
        self.radio_ex_page.pack()
        self.radio_name_page = Radiobutton(self.main, text="Sort your files by name", variable=self.var_radio_page, value=1)
        self.radio_name_page.pack()
        self.radio_alpha_page = Radiobutton(self.main, text="Sort your files by alphabet order", variable=self.var_radio_page, value=2)
        self.radio_alpha_page.pack()

        Button(self.main, text="accept", command=self.Start).pack() #Bouton pour lancer les process
        self.main.mainloop()
    def on_select(self, event): #fonction pour modifier la langue du logiciel
        self.var_listbox = self.listbox.get(self.listbox.curselection())
    def Start(self): #fonction pour lancer la bonne page
        self.main.destroy() #destruction de la page avant l'apparition de la suivante pour éviter certain bugs
        if self.var_radio_page.get() == 0: #si on veut trier en fonction des extensions
            manager_ext_files.PageSortExt(self.langage.index(self.var_listbox))
        elif self.var_radio_page.get() == 1: #si on veut trier en fonction d'un mot
            manager_name_files.Page_manager(self.langage.index(self.var_listbox))
        elif  self.var_radio_page.get() == 2: #si on veut trier par ordre alphabetique
            print("sort by alphabet order")
        


Main()