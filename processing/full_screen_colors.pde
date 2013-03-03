boolean change = false;
int counter = 0;

void setup(){
  size(2000,50);
  background((int)random(255), (int)random(255), (int)random(255));
}

void draw(){
  if (change){
    if (counter%60 == 0){
      background((int)random(255), (int)random(255), (int)random(255));
    }
    counter++;
  }
  
}

void mousePressed(){
  change = !change;
}
