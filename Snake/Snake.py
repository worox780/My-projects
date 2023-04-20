from random import randint
import os


class Snake:
    def __init__(self, plate_size: int, position_apple: list) -> None:
        self.plate_size = plate_size + 2
        self.position_apple = position_apple
        self.position_head_player = [1, 1]
        self.position_player = [[1, 1]]
        self.new_direction = ""
        self.old_player_size = 1
        self.new_player_size = 1
        self.tour_count = 0
        self.play = True 
        self.map_gene = []
    #get the new coordonates of the snke head, and check if your are not out of the plate.
    def __player_moovement__(self) -> bool:
        dir = input()
        if dir == "":
            dir = self.new_direction
        if (dir[0] in "aA"):
            self.new_direction = "aA"
            self.position_head_player[1] -= 1
        elif (dir[0] in "d"):
            self.new_direction = "dD"
            self.position_head_player[1] += 1
        elif (dir[0] in "zZ"):
            self.old_direction = "zZ"
            self.position_head_player[0] -= 1
        elif (dir[0] in "sS"):
            self.old_direction = "sS"
            self.position_head_player[0] += 1
        else: Snake.__end_message__(self, False)
        if Snake.__check_player_can_moov__(self):
            return True
    #check if the player can moov with his position head, and if it can, moov the player.
    def __check_player_can_moov__(self):
        for position_part in self.position_player:
            if self.position_head_player == position_part:
                Snake.__end_message__(self, False)
        if len(self.position_player) == (self.plate_size - 2) ** 2:
            Snake.__end_message__(self, True)
        if self.position_head_player[0] > 0 and self.position_head_player[0] < self.plate_size and self.position_head_player[1] > 0 and self.position_head_player[1] < self.plate_size:
            return True
        else: Snake.__end_message__(self, False)
    #create the map
    def __map_generation__(self) -> None:
        self.map_gene = []
        for x in range(self.plate_size):
            self.map_gene.append([])
            for y in range(self.plate_size):
                if (x == 0) or (x == self.plate_size - 1):
                    self.map_gene[x].append("/")
                else:
                    if (y == 0) or (y == self.plate_size - 1):
                        self.map_gene[x].append("/")
                    else:
                        self.map_gene[x].append("-")
    #create the body on the map
    def __player_generation__(self) -> None:
        Snake.__creation_back__(self)
        for i in range(len(self.position_player)):
            self.map_gene[self.position_player[i][0]][self.position_player[i][1]] = "x"
    #create the coordonates of the snake.
    def __creation_back__(self) -> None:
        x = self.position_head_player[0]
        y = self.position_head_player[1]
        if self.new_player_size == self.old_player_size:
            self.position_player.insert(0,[x, y])
            self.position_player.pop(len(self.position_player) - 1)
        else:
            self.position_player.insert(0,[x, y])
            self.old_player_size = self.new_player_size
    #add the apple on the plate and chech if the apple to position isn't on the snake body
    def __apple_generation__(self) -> list:
        if (self.position_head_player == self.position_apple) or (self.tour_count < 1):
            self.new_player_size += 1
            while True:
                x = randint(1, self.plate_size - 2)
                y = randint(1, self.plate_size - 2)
                if self.map_gene[x][y] == "-":
                    self.map_gene[x][y] = "o"
                    self.position_apple = [x, y]
                    break
        else:
            self.map_gene[self.position_apple[0]][self.position_apple[1]] = "o"
    #print the plate. It can see if you win with head position or body size.
    def __Print_plate__(self) -> None:
        #os.system('cls')
        self.tour_count += 1
        for x in range(self.plate_size):
            for y in range(self.plate_size):
                print(self.map_gene[x][y], end=" ")   
            print()
    #print the message when you win or loss.
    def __end_message__(self, cause: bool) -> None:
        self.play = False
        if cause:
            print(f"GG, you have win in {self.tour_count} rouds")
        else:
            print(f"You have loose in {self.tour_count} rouds a snake's size {round(len(self.position_player) / 2)}")