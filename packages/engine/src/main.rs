extern crate anyhow;

use rust_bert::pipelines::common::ModelType;
use rust_bert::pipelines::translation::{Language, TranslationModelBuilder};
use tch::Device;

fn main() -> anyhow::Result<()> {
    let model = TranslationModelBuilder::new()
        .with_device(Device::cuda_if_available())
        .with_model_type(ModelType::Marian)
        // .with_large_model()
        .with_source_languages(vec![Language::English])
        .with_target_languages(vec![Language::Spanish])
        .create_model()?;

    let input_context_1 = "This is a sentence to be translated";
    let input_context_2 = "The dog did not wake up.";

    let output = model.translate(&[input_context_1, input_context_2], Language::English, Language::Spanish)?;

    for sentence in output {
        println!("{sentence}");
    }
    
    Ok(())
}