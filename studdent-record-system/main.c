#include <stdio.h>

/**
 * 
 */

void welcome (void);

int main (void) {
    char name[20];

    welcome();
    scanf("%s", name);
    printf("Your name is %s\n", name);
    
    return -1;
}

void welcome (void) {
    printf("================================\n");
    printf("Welcome to STUDENT RECORD SYSTEM\n");
    printf("================================\n");
}
