from tkinter import *
import os
from time import sleep
class end: #end page
    def __init__(self) -> None:
        self.root = Tk()
        self.root.resizable(False, False)
        Label(self.root, text="Le programmme vient de finir \nson execution, merci de relancer l'application \npour pouvoir effectuer une nouvelle procédure", height=5, width=50).pack()
        self.root.protocol("WM_DELETE_WINDOW", self.on_closing) #calling func on_closing when page close
        self.root.mainloop()
    def on_closing(self) -> None: #loop from the end page to the main page
        self.root.destroy()
