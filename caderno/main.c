#include <stdio.h>

int main() {
    int opcao;
    char nota[200];


    printf("Caderno de Estudos - Vini\n");
    printf("1 - Criar nota\n");
    printf("2 - Ver notas\n");
    printf("3 - Sair\n");


    scanf("%d", &opcao);


    switch (opcao) {
        case 1: {
            printf("Opção 1 selecionada: Criar nota\n");

            getchar();
            fgets(nota, 200, stdin);

            FILE *arquivo = fopen("notas.txt", "a");
            if (arquivo == NULL) {
                printf("Erro ao abrir o arquivo.\n");
                return 1;
            }
            fprintf(arquivo, "%s\n", nota);
            fclose(arquivo);
            break;
        }
        case 2: {
            printf("Opção 2 selecionada: Ver notas\n");
            FILE *arquivo = fopen("notas.txt", "r");
            if (arquivo == NULL) {
                printf("Nenhum arquivo de notas encontrado.\n");
                return 1;
            }
            char linha[200];
            printf("Notas salvas:\n");
            while (fgets(linha, sizeof(linha), arquivo) != NULL) {
                printf("%s", linha);
            }
            fclose(arquivo);

            
            break;
        }
        case 3: {
            printf("Saindo do programa...\n");
            break;
        }
        default:
            printf("Opção inválida. Por favor, selecione uma opção válida.\n");
            break;
    }

    return 0;
}