int counter = 0;

void setup(){
  size(2000,1200);
  background((int)random(255), (int)random(255), (int)random(255));
}

void draw(){
    if (counter%60 == 0){
      background((int)random(255), (int)random(255), (int)random(255));
    }
    counter++;
}

