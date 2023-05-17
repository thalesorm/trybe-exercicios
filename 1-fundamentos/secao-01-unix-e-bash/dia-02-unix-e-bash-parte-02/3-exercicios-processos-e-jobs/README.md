
# Exercícios - processos & jobs

-   Liste todos os processos.
    
-   Agora use o comando  [`sleep`](https://linux.die.net/man/3/sleep)  `30`  [`&`](https://linuxhandbook.com/run-process-background/).
    
-   Use a listagem de processos para encontrar o PID do processo que está executando o comando  `sleep 30`  e termine a sua execução  (mate o processo).
    
-   Execute novamente o comando  `sleep 30`, mas agora sem o  `&`. Depois, faça com que ele continue executando em background.
    
-   Crie um processo em background que rode o comando  `sleep`  por 300 segundos.
    
-   Crie mais dois processos que rodem o comando  `sleep`  por 200 e 100 segundos, respectivamente.
    

> Você deve criá-los em  _foreground_  (sem usar o  `&`) e suspendê-los (apertando  `ctrl+z`) após cada um começar a executar.

-   Verifique que apenas o processo  `sleep 300`  está em execução com o comando  `jobs`. Suspenda a execução desse processo.

> Você vai precisar trazer o processo para  _foreground_  (`fg`) e suspendê-lo (`ctrl+z`), ou enviar um sinal.

-   Retome a execução do processo  `sleep 100`  em background com o comando  `bg`.
    
<<<<<<< HEAD
-   Termine a execução de todos os processos  `sleep`  (mate os processos).
=======
-   Termine a execução de todos os processos  `sleep`  (mate os processos).
>>>>>>> 71609dd1c846c3ef9684d314127fa1227a9f9f65
