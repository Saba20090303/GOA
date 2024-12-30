package main
import "fmt"

func linearSearch(arr []int, target int) int {
    for i, value := range arr {
        if value == target {
            return i
        }
    }
    return -1
}

func main() {

    arr := []int{10, 20, 30, 40, 50}
    target := 40

    result := linearSearch(arr, target)

    if result != -1 {
        fmt.Printf("Found value in place %d.\n", result)
    } else {
        fmt.Println("Value not found.")
    }
}
