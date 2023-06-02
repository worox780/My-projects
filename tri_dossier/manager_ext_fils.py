from tkinter import *
import os
from time import sleep
from end import end

class Page_manager:
    def __init__(self, rows, langage:int) -> None:
        self.root = Tk()
        self.sentence = [["démarer le processus", "chemin de départ", "chemin d'arrivé", "extension"], ["Start the process", "path from", "path to", "extension", "print", "lol"]]
        self.langage = langage
        self.root.resizable(False, False)
        self.entries = []  # Liste pour stocker les entrées

        self.m = Frame(self.root)
        self.m.grid()
        self.btn = Button(self.root, command=self.get_entries, text=self.sentence[self.langage][0])
        self.btn.grid()

        for y in range(3): #title table generation
            self.l = Label(self.m, width=20, text=self.sentence[self.langage][y+1])
            self.l.grid(row=0, column=y)

        for y in range(rows): #table generation
            row_entries = []  #Array entry
            print("ok")
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
        #self.info_transert = Label(self.root, text="transfert 1, fichiers transferés 1/1")
        #self.info_transert.grid()
        for val in range(len(values)):
            self.iteration(values[val])
        self.destroyed() #call the next page after the process
    def iteration(self,values): #process
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