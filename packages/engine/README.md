# Engine

The core ML engine for the project. This is where the magic happens.

Its using [Rust-Bert](https://docs.rs/rust-bert/latest/rust_bert/) as its high level model access, as well as [tch](https://github.com/LaurentMazare/tch-rs) and [pyTorch](https://pytorch.org/) for the actual ML.

## Building and Running

1. Follow the install steps for pyTorch on your os.
2. Make sure [OpenSSL rust bindings](https://docs.rs/openssl/latest/openssl/) is installed.
3. Update your shell to use the libtorch bindings for pyTorch.

Im using fish shell, so I added the following to my `~/.config/fish/config.fish` file:

```sh
# PyTorch
# see https://pytorch.org/get-started/locally/
set PATH $PATH ~/.local/bin
set -x LIBTORCH /path/to/libtorch
set -x LD_LIBRARY_PATH $LIBTORCH/lib $LD_LIBRARY_PATH
```

Install the lib-torch bindings here `https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-shared-with-deps-1.13.1%2Bcpu.zip`

4. Build the project with `cargo build --release`
5. Run the project with `run the binary in target/release`
