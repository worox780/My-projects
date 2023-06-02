from tkinter import *
import manager_ext_files
        

class Main:
    def __init__(self) -> None:
        self.main = Tk()
        self.main.geometry("250x250+50+50")
        self.langage = ["French", "English"]
        Label(self.main, text="choose your langage").pack()
        self.var_listbox = StringVar()
        self.var_listbox = "English"
        self.listbox = Listbox(self.main, selectmode=SINGLE, listvariable=self.var_listbox)
        self.listbox.insert(END, "French")
        self.listbox.insert(END, "English")
        self.listbox.pack()
        self.listbox.bind('<<ListboxSelect>>', self.on_select)
        Button(self.main, text="accept", command=self.start).pack()
        self.main.mainloop()
    def on_select(self, event):
        self.var_listbox = self.listbox.get(self.listbox.curselection())
    def start(self):
        self.main.destroy()
        Page(self.langage.index(self.var_listbox))
        

class Page:
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

        self.btn_check = Button(self.main, text=self.sentence[self.langage][2], command=self.manager_fils)
        self.btn_check.pack()
        self.main.mainloop()
    def manager_fils(self):
        self.main.destroy()
        manager_ext_files.Page_manager(self.spin_var.get(), self.langage)

Main()










































