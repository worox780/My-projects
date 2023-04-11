from random import randint
import os


class Game:
    def __init__(self, plate_size: int, position_apple: list, position_head_player: list) -> None:
        self.plate_size = plate_size + 2
        self.position_apple = position_apple
        self.position_head_player = position_head_player
        self.position_player = [[position_head_player]]
        self.old_direction = ''
        self.new_direction = ''
        self.old_player_size = 1
        self.new_player_size = 1
        self.tour_count = 0
        self.play = True 
        self.map_gene = Game.__map_generation__(self)
    #get the new coordonates of the snke head, and check if your are not out of the plate.
    def __player_moovement__(self) -> None:
        self.new_direction = input()
        if self.new_direction == "":
            self.new_direction = self.old_direction
        if (self.new_direction[0] in "aA") and (self.new_direction != "dD"):
            self.old_direction = self.new_direction
            self.position_head_player[1] -= 1
        if (self.new_direction[0] in "dD") and (self.new_direction != "aA"):
            self.old_direction = self.new_direction
            self.position_head_player[1] += 1
        if (self.new_direction[0] in "zZ") and (self.new_direction != "sS"):
            self.old_direction = self.new_direction
            self.position_head_player[0] -= 1
        if (self.new_direction[0] in "sS") and (self.new_direction != "zZ"):
            self.old_direction = self.new_direction
            self.position_head_player[0] += 1
        else: Game.__end_message__(self, False)
        Game.__check_player_can_moov__(self)
    #check if the player can moov with his position head, and if it can, moov the player.
    def __check_player_can_moov__(self):
        for position_part in self.position_player:
            if self.position_head_player == position_part:
                Game.__end_message__(self, False)
        if self.position_head_player[0] > 0 and self.position_head_player[0] < self.plate_size + 1 and self.position_head_player[1] > 0 and self.position_head_player[1] < self.plate_size + 1:
            Game.__Print_plate__(self)
        else: Game.__end_message__(self, False)
    #create the map
    def __map_generation__(self) -> None:
        self.map_gene = []
        for x in range(self.plate_size):
            self.map_gene.append([])
            for y in range(self.plate_size):
                if (x == 0) or (x == self.plate_size + 1):
                    self.map_gene[x].append("/")
                else:
                    if (y == 0) or (y == self.plate_size + 1):
                        self.map_gene[x].append("/")
                    else:
                        self.map_gene[x].append("-")   
    #create the body on the map
    def __player_generation__(self) -> list:
        Game.__creation_back__(self)
        for i in range(len(self.position_player)): self.map_gene[self.position_player[i][0]][self.position_player[i][1]] = "x"
    #create the coordonates of the snake.
    def __creation_back__(self) -> list:
        self.x = self.position_player[0]
        self.y = self.position_player[1]
        if self.new_player_size > self.old_player_size:
            self.position_player.index(0,[self.x, self.y])
            self.old_player_size = self.new_player_size
        else:
            self.position_player.index(0,[self.x, self.y])
            self.position_player.pop(len(self.position_player) - 1)
    #add the apple on the plate and chech if the apple to position isn't on the snake body
    def __apple_generation__(self) -> list:
        while True:
            self.x = randint(0, self.plate_size)
            self.y = randint(0, self.plate_size)
            if self.map_gene[self.x][self.y] == "-":
                self.map_gene[self.x][self.y] = "o"
                self.position_apple = [self.x, self.y]
                self.new_player_size = len(self.position_player)
                break
    #print the plate. It can see if you win with head position or body size.
    def __Print_plate__(self) -> None:
        self.map_gene = Game.__map_generation__(self)
        self.map_gene = Game.__player_generation__(self, self.plate)
        if (self.new_player_size < self.plate_size ** 2) and (self.position_head_player == self.position_apple): self.map_gene = Game.__apple_generation__(self)
        else: Game.__end_message__(self, True)
        os.system('cls')
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
            print(f"You have loose in {self.tour_count} rouds a snake's size {len(self.position_player)}")
