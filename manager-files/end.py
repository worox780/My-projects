from tkinter import *
class end: #end page
    def __init__(self, langage) -> None:
        self.root = Tk()
        self.root.geometry("250x100+50+50")
        self.root.resizable(False, False)
        self.sentence = ["Le programmme vient de finir son execution, \nmerci de relancer l'application pour pouvoir \neffectuer une nouvelle procédure.", "The program has just finished \nits execution. Please restart \nthe application to perform a new procedure."]
        Label(self.root, text=self.sentence[langage], height=5, width=50).pack()
        self.root.protocol("WM_DELETE_WINDOW", self.on_closing) #calling func on_closing when page close
        self.root.mainloop()
    def on_closing(self) -> None: #loop from the end page to the main page
        self.root.destroy()
