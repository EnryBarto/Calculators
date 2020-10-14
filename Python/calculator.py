#Bartocetti Enrico, 23/11/2019
a = float(input("Inserire il primo numero: "))
print("Inserire l'operatore:")
print("Per scegliere addizione digitare +")
print("Per scegliere sottrazione digitare -")
print("Per scegliere moltiplicazione digitare *")
print("Per scegliere divisione digitare /")
operator = input("→ ")
b = float(input("Inserire il secondo numero: "))
if operator=="+":
    r = a+b
    print("Il risultato dell'addizione è: "+ str(a) +" + "+ str(b) +" = "+ str(r))
elif operator=="-":
    r = a-b
    print("Il risultato della sottrazione è: "+ str(a) +" - "+ str(b) +" = "+ str(r))
elif operator == "*":
    r = a * b
    print("Il risultato della moltiplicazione è: "+ str(a) +" x "+ str(b) +" = "+ str(r))
elif operator == "/":
    if(a== 0 and b == 0):
        print("Indefinito")
    elif (a==0 and b!=0):
        print("Impossibile dividere un numero per 0")
    else:
        r = a / b
        print("Il risultato della divisione è: "+ str(a) +" : "+ str(b) +" = "+ str(r))
else:
    print("Impossibile eseguire l'operazione")