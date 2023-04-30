# Engine

The core ML engine for the project. This is where the magic happens.

Its using [Rust-Bert](https://docs.rs/rust-bert/latest/rust_bert/) as its high level model access, as well as [tch](https://github.com/LaurentMazare/tch-rs) and [pyTorch](https://pytorch.org/) for the actual ML.

## Building and Running

1. Follow the install steps for pyTorch on your os.
2. Make sure [OpenSSL rust bindings](https://docs.rs/openssl/latest/openssl/) is installed.
3. Install `torch` using pip.