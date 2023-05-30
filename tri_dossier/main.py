from tkinter import *
import manager 


class main:
    def __init__(self) -> None:
        self.main = Tk()

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
        manager.Page_manager()
        self.main.destroy()

main()