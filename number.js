function solution(i)
{
    var sum = 0;
    sum = i;

    while (i)
    {
        sum = sum + (i % 10);
        i /= 10;
    }

    return sum;
}

function utama()
{
    var N = 10000;
    var val = 0
    N = bool *arr;

    arr = new bool[N];

    for( i = 0; i < N; i++)
    {
        val = solution(i + 1);
        if(val <= N)
        {
            arr[val - 1] = true;
        }
    }

    for( i = 0; i < N; i++)
    {
        if(arr[i] == false)
        {
            count << i + 1 << "\n";
        }
    }
    return 0;
}