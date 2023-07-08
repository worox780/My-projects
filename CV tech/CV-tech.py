import tkinter as tk
from tkinter import filedialog
import pandas as pd
import sqlite3
import webbrowser
from time import sleep

class Acceuil:
    def __init__(self) -> None:
        self.main = tk.Tk()
        self.main.geometry("+50+50")
        self.main.config(background="blue")
        self.main.resizable(False, False)
        tk.Label(self.main, text="Bienvenue", background="cyan", relief="solid", width=13).pack()
        tk.Label(self.main, text="Choisissez le mode que vous souhaitez", relief="solid", width=30, background="cyan",).pack()
        
        self.var_radio = tk.IntVar()
        self.radio3 = tk.Radiobutton(self.main, text="Accéder à vos ressources", variable=self.var_radio, value=0)
        self.radio3.pack()
        self.bouton_process = tk.Button(self.main, text="Accepter", command=self.Start)
        self.bouton_process.pack()
        self.main.mainloop()
    
    def Start(self):
        self.main.destroy()
        if self.var_radio.get() == 0:
            Show()


class Show:
    def __init__(self) -> None:
        self.main = tk.Tk()
        self.main.geometry("+50+50")
        self.main.resizable(False, False)
        self.get_name_btn = []
        tk.Label(self.main, text="Bienvenue").grid()
        self.cadre = tk.Frame(self.main)
        self.cadre.grid()
        self.ShowTable()
        self.add = tk.Button(self.main, text="ajouter une table", command=self.AddTable)
        self.add.grid()
        self.btn_cancel = tk.Button(self.main, text="Quitter la table", command=self.QuitTable)
        self.btn_cancel.grid()
        self.main.mainloop()
    
    def QuitTable(self):
        self.main.destroy()
        Acceuil()

    def CountTable(self):
        connection = sqlite3.connect(r"C:\Users\VERITE\OneDrive\Documents\GitHub\My-project\CV tech\Base.db")
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT COUNT(*) FROM sqlite_master WHERE type='table';")
            result = cursor.fetchone()[0] - 1
            tables = cursor.execute("SELECT name FROM sqlite_master WHERE type='table';").fetchall()
        except:
            print("pas cool")
        finally:
            cursor.close()
            connection.close()
            return [result, tables]

    def ShowTable(self):
        result = self.CountTable()
        print(result[0])
        print(result[1])
        for i in range(result[0]):
            self.get_name_btn.append(result[1][i+1][0])
            e = tk.Button(self.cadre, text=result[1][i+1][0])
            e.configure(command=lambda btn=e: self.WachTable(btn))
            e.grid()

    def AddTable(self):
        tk.Label(self.main, text="nom de la table").grid()
        self.var_entry_name_table = tk.StringVar()
        self.entry_name_table = tk.Entry(self.main, textvariable=self.var_entry_name_table)
        self.entry_name_table.grid()
        self.btn_name_table = tk.Button(self.main, text="Accepter", command=self.CreatTable)
        self.btn_name_table.grid()

    def CreatTable(self):
        connection = sqlite3.connect(r"C:\Users\VERITE\OneDrive\Documents\GitHub\My-project\CV tech\Base.db")
        nom_col = ["id", "Prénom", "Nom", "Lien", "Email", "Companie", "Taille_entreprise", "Emploie_actuel", "Emploie_passé_1", "Emploie_passé_2"]
        try:
            # Créer un curseur
            cursor = connection.cursor()

            # Vérifier la connexion
            if cursor:
                print("Connexion établie avec succès.")

            # Créer une table
            table_name = self.var_entry_name_table.get()
            print("ok1")
            sql = f"CREATE TABLE {table_name} ({nom_col[0]} INTEGER PRIMARY KEY, {nom_col[1]} TEXT, {nom_col[2]} TEXT, {nom_col[3]} TEXT, {nom_col[4]} TEXT, {nom_col[5]} TEXT, {nom_col[6]} TEXT, {nom_col[7]} TEXT, {nom_col[8]} TEXT, {nom_col[9]} TEXT)"
            print("ok2")
            try:
                cursor.execute(sql)
            except:
                print("pourquoi ?")
        except:
            print('jsp')
        finally:
            # Valider les modifications et fermer la connexion
            connection.commit()
            cursor.close()
            connection.close()
            self.main.destroy()
            Show()
    
    def WachTable(self, btn):
        number = []
        btn = str(btn)
        print(len(btn))
        if  len(btn) == 15:
            number = 0
        else:
            for i in range(15, len(btn)):
                number.append(btn[i])
            number = int("".join(number)) - 1
        self.main.destroy()
        print(self.get_name_btn[number])
        Test(self.get_name_btn[number])


class Test:
    def __init__(self, nom_table) -> None:
        self.root = tk.Tk() #fenêtre
        self.root.geometry("+50+50") #position de la fenêtre
        self.root.resizable(False, False) #non redimentionble

        self.name_table:str = nom_table #nom de la table de la base de donnée
        self.path = r"C:\Users\VERITE\OneDrive\Documents\GitHub\My-project\CV tech\Base.db" #chemin de la base de donnée
        
        self.entries:list = [] #liste des entries
        self.link:list = [] #listes des liens
        self.use:int = 0 #nombre de changement de la table

        tk.Label(self.root, text="Liste de contact").pack() #label main
        self.frame_main = tk.Frame(self.root, relief="groove", bd=1) #la frame qui contient le tableur et la scrollbar
        self.frame_main.pack() #ajout de la frame

        self.canvas = tk.Canvas(self.frame_main) #contient la Frame du tableur
        self.frame = tk.Frame(self.canvas) #Frame qui contien le tableur
        #la scrollbar qui est dans le cadre, et qui est affiché dans le canvas
        self.scrollbar = tk.Scrollbar(self.frame_main, orient="vertical", command=self.canvas.yview)
        self.canvas.configure(yscrollcommand=self.scrollbar.set)
        self.scrollbar.pack(side="right", fill="y")
        self.canvas.pack(side="left")
        self.canvas.create_window((0,0), window=self.frame, anchor="nw")
        self.frame.bind("<Configure>",self.myfunction)
        self.TableByTable() #appel pour la génération de la table
        tk.Label(self.root, text="Option").pack() #label
        self.btn_add = tk.Button(self.root, text="Télécharger de nouveau contact", command=self.UploadData) #boutton pour ajouter de la data à la table
        self.btn_add.pack() #ajout du btn
        self.btn_cancel = tk.Button(self.root, text="Quitter la table", command=self.QuitTable) #boutton pour quitter la table
        self.btn_cancel.pack() #ajout du btn
        self.root.protocol("WM_DELETE_WINDOW", self.OnClosing) #calling func on_closing when page close

        self.root.mainloop()

    def QuitTable(self):
        self.root.destroy()
        Show()

    def myfunction(self, event):
        self.canvas.configure(scrollregion=self.canvas.bbox("all"),width=125*9,height=450)
    
    def GetTable(self):
        connection = sqlite3.connect(self.path)
        try:
            cursor = connection.cursor()
            data = cursor.execute(f"SELECT * FROM {self.name_table}").fetchall()
        except:
            print("can't take table")
        finally:
            cursor.close()
            connection.close()
            return data
    
    def TableByExcelTable(self, path):
        self.TableByTable()
        data = self.GetTable()
        try:
            connection = sqlite3.connect(self.path)
            cursor = connection.cursor()
            for y in range(1, path.shape[0]):
                row_entries = []  #Array entry
                prenom = cursor.execute(f"SELECT * FROM {self.name_table} WHERE Prénom = ?", (path.iloc[y][0],)).fetchall()
                nom = cursor.execute(f"SELECT * FROM {self.name_table} WHERE Nom = ?", (path.iloc[y][1],)).fetchall()
                if len(prenom) == 0 or len(nom) == 0:
                    for x in range(9):
                        if x == 2:
                            e = tk.Button(self.frame, text="lien de la page Linkedin", command=lambda btn=e: self.Link(btn))
                            e.grid(row=y+1+len(data), column=x)
                            self.link.append(path.iloc[y, x])
                            row_entries.append("")
                        elif x < 6:
                            var = tk.StringVar()
                            e = tk.Entry(self.frame, width=20, textvariable=var)
                            var.set(path.iloc[y, x])
                            e.grid(row=y+1+len(data), column=x)
                            row_entries.append(var)  #append entry var in a tiny array
                        else:
                            var = tk.StringVar()
                            e = tk.Entry(self.frame, width=20, textvariable=var)
                            e.grid(row=y+1+len(data), column=x)
                            row_entries.append(var)  #append entry var in a tiny array 
                    self.entries.append(row_entries)  #append all entry var of a row in an array
                    new_information = (path.iloc[y][0], path.iloc[y][1], path.iloc[y][2], path.iloc[y][3], path.iloc[y][4], path.iloc[y][5], " ", " ", " ",)
                    cursor.execute(f"INSERT INTO {self.name_table} (Prénom,Nom,Lien,Email,Companie,Taille_entreprise,Emploie_actuel,Emploie_passé_1,Emploie_passé_2) VALUES(?,?,?,?,?,?,?,?,?)", new_information)
                    connection.commit()
            print(self.link)
        except sqlite3.Error as e:
            print(e)
        finally:
            cursor.close()
            connection.close()
    
    def TableByTable(self):
        data = self.GetTable()
        nom_col = ["Prénom", "Nom", "Lien", "Email", "Companie", "Taille_entreprise", "Emploie_actuel", "Emploie_passé_1", "Emploie_passé_2"]
        for x in range(len(nom_col)):
            tk.Label(self.frame, text=nom_col[x], width=17).grid(row=0, column=x)
        for y in range(len(data)): #table generation
            for x in range(1, len(nom_col)+1):
                if x == 3:
                    e = tk.Button(self.frame, text="lien de la page Linkedin", command=lambda btn=e: self.Link(btn))
                    e.grid(row=y+1, column=x-1)
                else:
                    var = tk.StringVar()
                    e = tk.Entry(self.frame, width=20, textvariable=var)
                    var.set(data[y][x])
                    e.grid(row=y+1, column=x-1)
    
    def Link(self, btn):
        try:
            connection = sqlite3.connect(self.path)
            cursor = connection.cursor()
            

            number = []
            btn = str(btn)
            print(len(btn))
            for i in range(29, len(btn)):
                number.append(btn[i])
            number = int("".join(number))
            pos = 2
            posok = 0
            while pos < number:
                pos += 8
                posok += 1
            data = cursor.execute(f"SELECT Lien FROM {self.name_table}").fetchall()
            webbrowser.open(data[posok][0])
        except webbrowser.Error as e:
            print(e)
            
    def UploadData(self):
        try:
            self.dataframe = pd.read_excel(self.GetFiles())
            self.use += 1
            for widget in self.frame.winfo_children():
                widget.destroy()
            self.entries.clear()
            self.link.clear()
            self.TableByExcelTable(self.dataframe)
        finally:
            pass
    
    def CheckDataIn(self):
        for y in range(1, self.dataframe.shape[0]):
            pass
    
    def GetFiles(self):
        root = tk.Tk()
        root.withdraw()
        # Ouvre le gestionnaire de fichiers
        file_path = filedialog.askopenfilename()
        # Vérifie si un fichier a été sélectionné
        if file_path: return file_path

    def OnClosing(self):
        self.root.destroy()
        exit
        
        

class Traitement:
    def __init__(self, nom_table:str) -> None:
        self.main = tk.Tk()
        self.main.geometry("+50+50")
        self.main.resizable(False, False)
        self.name_table = nom_table
        self.path = r"C:\Users\VERITE\OneDrive\Documents\GitHub\My-project\CV tech\Base.db"
        self.entries = []
        self.link = []
        self.use = 0
        tk.Label(self.main, text="Liste de contact").grid()
        self.cadre = tk.Frame(self.main, height=500)
        self.cadre.grid(row=1)
        self.TableByTable()
        tk.Label(self.main, text="Option").grid()
        self.btn_reset = tk.Button(self.main, text="Télécharger de nouveau contact", command=self.UploadData)
        self.btn_reset.grid()
        self.btn_upload = tk.Button(self.main, text="")
        self.btn_cancel = tk.Button(self.main, text="Quitter la table", command=self.QuitTable)
        self.btn_cancel.grid()
        self.main.protocol("WM_DELETE_WINDOW", self.on_closing) #calling func on_closing when page close
        self.man.mainloop()

    def QuitTable(self):
        self.main.destroy()
        Show()

    def GetTable(self):
        connection = sqlite3.connect(self.path)
        try:
            cursor = connection.cursor()
            data = cursor.execute(f"SELECT * FROM {self.name_table}").fetchall()
        except:
            print("can't take table")
        finally:
            cursor.close()
            connection.close()
            return data

    def TableByExcelTable(self, path):
        self.TableByTable()
        data = self.GetTable()
        try:
            connection = sqlite3.connect(self.path)
            cursor = connection.cursor()
            for y in range(1, path.shape[0]):
                row_entries = []  #Array entry
                prenom = cursor.execute(f"SELECT * FROM {self.name_table} WHERE Prénom = ?", (path.iloc[y][0],)).fetchall()
                nom = cursor.execute(f"SELECT * FROM {self.name_table} WHERE Nom = ?", (path.iloc[y][1],)).fetchall()
                if len(prenom) == 0 or len(nom) == 0:
                    for x in range(9):
                        if x == 2:
                            e = tk.Button(self.cadre, text=f"lien de la page Linkedin {y}", command=lambda btn=e: self.Link(btn))
                            e.grid(row=y+1+len(data), column=x)
                            self.link.append(path.iloc[y, x])
                            row_entries.append("")
                        elif x < 6:
                            var = tk.StringVar()
                            e = tk.Entry(self.cadre, width=20, textvariable=var)
                            var.set(path.iloc[y, x])
                            e.grid(row=y+1+len(data), column=x)
                            row_entries.append(var)  #append entry var in a tiny array
                        else:
                            var = tk.StringVar()
                            e = tk.Entry(self.cadre, width=20, textvariable=var)
                            e.grid(row=y+1+len(data), column=x)
                            row_entries.append(var)  #append entry var in a tiny array 
                    self.entries.append(row_entries)  #append all entry var of a row in an array
                    new_information = (path.iloc[y][0], path.iloc[y][1], path.iloc[y][2], path.iloc[y][3], path.iloc[y][4], path.iloc[y][5], " ", " ", " ",)
                    cursor.execute(f"INSERT INTO {self.name_table} (Prénom,Nom,Lien,Email,Companie,Taille_entreprise,Emploie_actuel,Emploie_passé_1,Emploie_passé_2) VALUES(?,?,?,?,?,?,?,?,?)", new_information)
                    connection.commit()
            print(self.link)
        except sqlite3.Error as e:
            print(e)
        finally:
            cursor.close()
            connection.close()

    def TableByTable(self):
        data = self.GetTable()
        nom_col = ["Prénom", "Nom", "Lien", "Email", "Companie", "Taille_entreprise", "Emploie_actuel", "Emploie_passé_1", "Emploie_passé_2"]
        for x in range(len(nom_col)):
            tk.Label(self.cadre, text=nom_col[x]).grid(row=0, column=x)
        for y in range(len(data)): #table generation
            row_entries = []  #Array entry
            for x in range(1, len(nom_col)+1):
                if x == 3:
                    e = tk.Button(self.cadre, text=f"lien de la page Linkedin {y}", command=lambda btn=e: self.Link(btn), textvariable=var)
                    e.grid(row=y+1, column=x-1)
                    self.link.append(data[y][x])
                    row_entries.append("")
                else:
                    var = tk.StringVar()
                    e = tk.Entry(self.cadre, width=20, textvariable=var)
                    var.set(data[y][x])
                    e.grid(row=y+1, column=x-1)
                    row_entries.append(var)  #append entry var in a tiny array
            self.entries.append(row_entries)  #append all entry var of a row in an array
        
    
    def Link(self, btn):
        try:
            number = []
            btn = str(btn)
            if self.use == 0:
                for i in range(14, len(btn)):
                    number.append(btn[i])
            else:
                print(len(str(self.use)))
                for i in range(14 + len(str(self.use)), len(btn)):
                    number.append(btn[i])
            number = int("".join(number))
            pos = 2
            posok = 0
            while pos < number:
                pos += 8
                posok += 1
            webbrowser.open(self.link[posok])
        except webbrowser.Error as e:
            print(e)

    def UploadData(self):
        try:
            self.dataframe = pd.read_excel(self.GetFiles())
            self.use += 1
            self.cadre.destroy()
            self.cadre = tk.Frame(self.main)
            self.cadre.grid(row=1)
            self.entries.clear()
            self.link.clear()
            self.TableByExcelTable(self.dataframe)
        finally:
            pass

    def CheckDataIn(self):
        for y in range(1, self.dataframe.shape[0]):
            pass

    def GetFiles(self):
        root = tk.Tk()
        root.withdraw()
        # Ouvre le gestionnaire de fichiers
        file_path = filedialog.askopenfilename()
        # Vérifie si un fichier a été sélectionné
        if file_path: return file_path

    def on_closing(self) -> None: #loop from the end page to the main page
        self.main.destroy()
        exit()


class Other:
    def __init__(self, chemin_fichier) -> None:
        self.main = tk.Tk()
        self.main.geometry("+50+50")
        self.main.resizable(False, False)
        self.dataframe = pd.read_excel(chemin_fichier)
        self.entries = []
        self.link = []
        self.use = 0
        tk.Label(self.main, text="Liste de contact").grid()
        self.cadre = tk.Frame(self.main)
        self.cadre.grid(row=1)
        self.Table()
        tk.Label(self.main, text="Option").grid()
        self.btn_reset = tk.Button(self.main, text="Changer la base de donnée", command=self.UploadData)
        self.btn_reset.grid()
        self.btn_upload = tk.Button(self.main, text="")
        self.main.protocol("WM_DELETE_WINDOW", self.on_closing) #calling func on_closing when page close
        self.main.mainloop()

    def Table(self):
        for x in range(self.dataframe.shape[1]):
            tk.Label(self.cadre, text=self.dataframe.iloc[0, x]).grid(row=0, column=x)
        for y in range(1, self.dataframe.shape[0]): #table generation
            row_entries = []  #Array entry
            for x in range(self.dataframe.shape[1]):
                if x == 2:
                    e = tk.Button(self.cadre, text=f"lien de la page Linkedin {y}", command=lambda btn=e: self.Link(btn), textvariable=var)
                    e.grid(row=y+1, column=x)
                    self.link.append(self.dataframe.iloc[y, x])
                    self.entries.append(row_entries)
                else:
                    var = tk.StringVar()
                    e = tk.Entry(self.cadre, width=20, textvariable=var)
                    var.set(self.dataframe.iloc[y, x])
                    e.grid(row=y+1, column=x)
                    row_entries.append(var)  #append entry var in a tiny array
            self.entries.append(row_entries)  #append all entry var of a row in an array
    
    def Link(self, btn):
        number = []
        btn = str(btn)
        print(btn)
        if self.use == 0:
            for i in range(14, len(btn)):
                number.append(btn[i])
        else:
            print(len(str(self.use)))
            for i in range(14 + len(str(self.use)), len(btn)):
                number.append(btn[i])
        number = int("".join(number))
        pos = 2
        posok = 0
        while pos < number:
            pos += 6
            posok += 1
        webbrowser.open(self.link[posok])

    def UploadData(self):
        self.use += 1
        self.cadre.destroy()
        self.cadre = tk.Frame(self.main)
        self.cadre.grid(row=1)
        self.dataframe = pd.read_excel(self.GetFiles())
        self.Table()

    def GetFiles(self):
        root = tk.Tk()
        root.withdraw()
        # Ouvre le gestionnaire de fichiers
        file_path = filedialog.askopenfilename()
        # Vérifie si un fichier a été sélectionné
        if file_path: return file_path

    def on_closing(self) -> None: #loop from the end page to the main page
        self.main.destroy()
        exit()
        


Acceuil()