<script>
    let name = 'world';
    let count = 0;

    function incerement() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }

    function reset() {
        count = 0;
    }

</script>

<main>
    <h1>Hello {name}!</h1>
    <p>This is the Module1 of the module export!</p>

    <div>
        Counter:
        <button on:click={decrement}>-</button>
        <span>{count}</span>
        <button on:click={incerement}>+</button>
        <button on:click={reset}>Reset</button>
    </div>
</main>