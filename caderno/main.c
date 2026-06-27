#include <stdio.h>
#include <time.h>

#define MAX_REGISTRO 100

struct registro {
    char materia[200];
    char titulo[70];
    char conteudo[200];
};

struct registro registros[MAX_REGISTRO];
int totalregistros = 0;

void registrarConteudo(void);
void verRegistros(void);

int main() {

    int opcao;

    while (1) {

        printf("\n=== CADERNO DE ESTUDOS ===\n");
        printf("1 - Criar nota\n");
        printf("2 - Ver notas\n");
        printf("0 - Sair\n");
        printf("Escolha: ");

        scanf("%d", &opcao);
        while(getchar() != '\n');

        if (opcao == 1) {
            registrarConteudo();
        }
        else if (opcao == 2) {
            verRegistros();
        }
        else if (opcao == 0) {
            printf("Saindo...\n");
            break;
        }
        else {
            printf("Opcao invalida!\n");
        }
    }

    return 0;
}

void registrarConteudo(void) {

    if (totalregistros >= MAX_REGISTRO) {
        printf("Limite atingido!\n");
        return;
    }

    printf("Digite a matéria: ");
    fgets(registros[totalregistros].materia, 200, stdin);

    printf("Digite o título: ");
    fgets(registros[totalregistros].titulo, 70, stdin);

    printf("Digite o conteúdo: ");
    fgets(registros[totalregistros].conteudo, 200, stdin);

    FILE *arquivo = fopen("registro.txt", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo!\n");
        return;
    }

    fprintf(arquivo,
        "Matéria: %sTítulo: %sConteúdo: %s\n------------------\n",
        registros[totalregistros].materia,
        registros[totalregistros].titulo,
        registros[totalregistros].conteudo
    );

    fclose(arquivo);

    totalregistros++;

    printf("Nota salva!\n");
}

void verRegistros(void) {

    if (totalregistros == 0) {
        printf("Nenhuma nota em memória.\n");
        return;
    }

    printf("\n=== REGISTROS EM MEMÓRIA ===\n");

    for (int i = 0; i < totalregistros; i++) {

        printf("\n[%d]\n", i + 1);
        printf("Matéria: %s", registros[i].materia);
        printf("Título: %s", registros[i].titulo);
        printf("Conteúdo: %s", registros[i].conteudo);
    }

    printf("\n");
}