---
permalink: /publications/
title: ""
excerpt: ""
author_profile: true
---

<span class='anchor' id='publications'></span>

# 📝 Publications

## All Publications

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">ICCV 2025</div>
      <img src="{{ "/images/publications/wma_iccv_2025.png" | relative_url }}" alt="RetinexMCNet">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[RetinexMCNet: A Memory Controller Dominated Network for Low-Light Video Enhancement Based on Retinex](https://openaccess.thecvf.com/content/ICCV2025/html/Wang_RetinexMCNet_A_Memory_Controller_Dominated_Network_for_Low-Light_Video_Enhancement_ICCV_2025_paper.html)
**[Meiao Wang]({{ "/people/#wang-meiao" | relative_url }})**, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Yaxi Lu, Jie Xu

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>Low-light video enhancement (LLVE) aims to restore videos degraded by insufficient illumination.While existing methods have demonstrated their effectiveness, they often face challenges with intra-frame noise, overexposure, and inter-frame inconsistency since they fail to exploit the temporal continuity across frames.Inspired by the progressive video understanding mechanism of human, we propose a novel end-to-end two-stage memory controller (MC) dominated network (RetinexMCNet). Specifically, we first define the overall optimization objective for Retinex-based LLVE, and accordingly design our framework.In stage one, aided by a dual-perspective Lightness-Texture Stability (LTS) loss, we perform per-frame enhancement without the MC, which uses a channel-aware Illumination Adjustment Module (IAM) and an illumination-guided Reflectance Denoising Module (RDM) based on Retinex theory to mitigate intra-frame noise and overexposure.In stage two, we activate the MC to simulate human temporal memory and integrate it with high-quality single frames for global consistency.Extensive qualitative and quantitative experiments on common low-light sRGB datasets demonstrate our method significantly outperforms state-of-the-art approaches.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/Meiao-W/RetinexMCNet" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">Neurocomputing 2024</div>
      <img src="{{ "/images/publications/ssk_neurocomputing_2025.png" | relative_url }}" alt="HDR-NFlow">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[HDR-NFlow: High dynamic range imaging with normalizing flow](https://www.sciencedirect.com/science/article/pii/S0925231225011841?via%3Dihub)

**Shuaikang Shang**, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Anlong Ming

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>High Dynamic Range (HDR) imaging aims to generate a high-quality HDR image by fusing multi-exposure Low Dynamic Range (LDR) images. When input LDR images have large object motion and severe saturation, previous methods suffer from ghosting artifacts, which results in unpleasant HDR images and hinders real-world applications. To address this critical issue to reconstruct high-quality HDR images, we propose a novel HDR imaging framework based on the normalizing flow (called HDR-NFlow), which regards HDR imaging as a conditional generation task and consists of a conditional encoder and an invertible flow network. Specifically, the conditional encoder utilizes the proposed Composite Attention Merge Module (CAMM) to capture long-range context and fusion dependency of multi-exposed frames to align the large object motions and an Asymmetric Selective Kernel Detail (ASKD) module to capture texture information via locally stripy extraction. With the extracted features as reasonable conditions, the invertible flow network hallucinates realistic content for saturated regions and generates an HDR image by realizing the conversion of Gaussian distribution to HDR image distribution. We conduct extensive experiments on commonly used benchmark datasets to demonstrate that our method achieves state-of-the-art performance both quantitatively and qualitatively.</p>
  </details>
  <span class="paper-code-link paper-code-link-disabled" title="Code link to be added">code</span>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">MM 2024</div>
      <img src="{{ "/images/publications/lcx_mm_2024.png" | relative_url }}" alt="Thinking Temporal Automatic White Balance">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[Thinking Temporal Automatic White Balance: Datasets, Models and Benchmarks](https://dl.acm.org/doi/10.1145/3664647.3681410)

**[Chunxiao Li]({{ "/people/#li-chunxiao" | relative_url }})**, Shuyang Wang, [Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }}), ***Anlong Ming***\*

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>Temporal Automatic White Balance (TAWB) corrects the color cast within each frame, while ensuring consistent illumination across consecutive frames. Unlike conventional AWB, there has been limited research conducted on TAWB for an extended period. However, the growing popularity of short-form videos has increased focus on video color experiences. To further advance research on TAWB, we aim to address the bottlenecks associated with datasets, models, and benchmarks. 1) Dataset challenge: Currently, only one TAWB dataset (BCC), captured with a single camera, is available. It lacks temporal continuity due to challenges in capturing realistic illuminations and dynamic raw data. In response, we meticulously designed an acquisition strategy based on the actual distribution pattern of illuminations and created a comprehensive TAWB dataset named CTA comprising 6 cameras that offer 12K continuous illuminations. Furthermore, we employed video frame interpolation techniques, extending the captured static raw data into dynamic form and ensuring continuous illumination. 2) Model challenge: Among the two prevailing TAWB methods, both rely on LSTM. However, the fixed gating mechanism of LSTM often fails to adapt to varying content or illuminations, resulting in unstable illumination estimation. In response, we propose CTANet, which integrates cross-frame attention and RepViT for self-adjustment to content and illumination variations. Additionally, the mobile-friendly design of RepViT enhances the portability of CTANet. 3) Benchmark challenge: Currently, there is no benchmark of TAWB methods on illumination and camera types to date. Addressing this, a benchmark has been proposed by conducting a comparative analysis of 8 cutting-edge AWB and TAWB methods with CTANet across 3 typical illumination scenes and 7 cameras from two representative datasets. The dataset and code are available in https://github.com/ChunxiaoLe/CTA-Dataset.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/ChunxiaoLe/CTA-Dataset" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">TIP 2023</div>
      <img src="{{ "/images/publications/zp_tip_2023.png" | relative_url }}" alt="VSSS">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[Vine Spread for Superpixel Segmentation](https://ieeexplore.ieee.org/document/10015675)

**[Pei Zhou]({{ "/people/#zhou-pei" | relative_url }})**, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Anlong Ming

<div class="paper-actions">
  <details class="paper-abstract">
  <summary>Abstract</summary>
  <p>Superpixel is the over-segmentation region of an image, whose basic units “pixels” have similar properties. Although many popular seeds-based algorithms have been proposed to improve the segmentation quality of superpixels, they still suffer from the seeds initialization problem and the pixel assignment problem. In this paper, we propose Vine Spread for Superpixel Segmentation (VSSS) to form superpixel with high quality. First, we extract image color and gradient features to define the soil model that establishes a “soil” environment for vine, and then we define the vine state model by simulating the vine “physiological” state. Thereafter, to catch more image details and twigs of the object, we propose a new seeds initialization strategy that perceives image gradients at the pixel-level and without randomness. Next, to balance the boundary adherence and the regularity of the superpixel, we define a three-stage “parallel spreading” vine spread process as a novel pixel assignment scheme, in which the proposed nonlinear velocity for vines helps to form the superpixel with regular shape and homogeneity, the crazy spreading mode for vines and the soil averaging strategy help to enhance the boundary adherence of superpixel. Finally, a series of experimental results demonstrate that our VSSS offers competitive performance in the seed-based methods, especially in catching object details and twigs, balancing boundary adherence and obtaining regular shape superpixels.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/zach-pei/VSSS" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>


<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">AAAI 2023</div>
      <img src="{{ "/images/publications/lcx_aaai_2023.png" | relative_url }}" alt="SWBNet">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[SWBNet: A Stable White Balance Network for sRGB Images](https://ojs.aaai.org/index.php/AAAI/article/view/25211)

**[Chunxiao Li]({{ "/people/#li-chunxiao" | relative_url }})**, [Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }}), [Zhifeng Zhang]({{ "/people/#zhang-zhifeng" | relative_url }}), ***Anlong Ming***\*

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>The white balance methods for sRGB images (sRGB-WB) aim to directly remove their color temperature shifts. Despite achieving promising white balance (WB) performance, the existing methods suffer from WB instability, i.e., their results are inconsistent for images with different color temperatures. We propose a stable white balance network (SWBNet) to alleviate this problem. It learns the color temperature-insensitive features to generate white-balanced images, resulting in consistent WB results. Specifically, the color temperatureinsensitive features are learned by implicitly suppressing lowfrequency information sensitive to color temperatures. Then, a color temperature contrastive loss is introduced to facilitate the most information shared among features of the same scene and different color temperatures. This way, features from the same scene are more insensitive to color temperatures regardless of the inputs. We also present a color temperature sensitivity-oriented transformer that globally perceives multiple color temperature shifts within an image and corrects them by different weights. It helps to improve the accuracy of stabilized SWBNet, especially for multiillumination sRGB images. Experiments indicate that our SWBNet achieves stable and remarkable WB performance.</p>
  </details>
  <span class="paper-code-link paper-code-link-disabled" title="Code link to be added">code</span>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">IJCAI 2023</div>
      <img src="{{ "/images/publications/dch_ijcai_2023.png" | relative_url }}" alt="ICDA">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[ICDA: Illumination-Coupled Domain Adaptation Framework for Unsupervised Nighttime Semantic Segmentation](https://www.ijcai.org/proceedings/2023/75)

**[Chenghao Dong]({{ "/people/#dong-chenghao" | relative_url }})**, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Anlong Ming

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>The performance of nighttime semantic segmentation has been significantly improved thanks to recent unsupervised methods. However, these methods still suffer from complex domain gaps, i.e., the challenging illumination gap and the inherent dataset gap. In this paper, we propose the illumination-coupled domain adaptation framework(ICDA) to effectively avoid the illumination gap and mitigate the dataset gap by coupling daytime and nighttime images as a whole with semantic relevance. Specifically, we first design a new composite enhancement method(CEM) that considers not only illumination but also spatial consistency to construct the source and target domain pairs, which provides the basic adaptation unit for our ICDA. Next, to avoid the illumination gap, we devise the Deformable Attention Relevance(DAR) module to capture the semantic relevance inside each domain pair, which can couple the daytime and nighttime images at the feature level and adaptively guide the predictions of nighttime images. Besides, to mitigate the dataset gap and acquire domain-invariant semantic relevance, we propose the Prototype-based Class Alignment(PCA) module, which improves the usage of category information and performs fine-grained alignment. Extensive experiments show that our method reduces the complex domain gaps and achieves state-of-the-art performance for nighttime semantic segmentation. Our code is available at https://github.com/chenghaoDong666/ICDA.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/chenghaoDong666/ICDA" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">IJCAI 2023</div>
      <img src="{{ "/images/publications/lcx_ijcai_2023.png" | relative_url }}" alt="WBFlow">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[WBFlow: Few-shot white balance for sRGB images via reversible neural flows](https://www.ijcai.org/proceedings/2023/114)

**[Chunxiao Li]({{ "/people/#li-chunxiao" | relative_url }})**, [Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }}), ***Anlong Ming***\*

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>The sRGB white balance methods aim to correct the nonlinear color cast of sRGB images without accessing raw values. Although existing methods have achieved increasingly better results, their generalization to sRGB images from multiple cameras is still under explored. In this paper, we propose the network named WBFlow that not only performs superior white balance for sRGB images but also generalizes well to multiple cameras. Specifically, we take advantage of neural flow to ensure the reversibility of WBFlow, which enables lossless rendering of color cast sRGB images back to pseudo raw features for linear white balancing and thus achieves superior performance. Furthermore, inspired by camera transformation approaches, we have designed a camera transformation (CT) in pseudo raw feature space to generalize WBFlow for different cameras via few shot learning. By utilizing a few sRGB images from an untrained camera, our WBFlow can perform well on this camera by learning the camera specific parameters of CT. Extensive experiments show that WBFlow achieves superior camera generalization and accuracy on three public datasets as well as our rendered multiple camera sRGB dataset. Our code is available at https://github.com/ChunxiaoLe/WBFlow.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/ChunxiaoLe/WBFlow" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">TIP 2022</div>
      <img src="{{ "/images/publications/zl_tip_2022.png" | relative_url }}" alt="ENRWRT">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[Explored Normalized Cut With Random Walk Refining Term for Image Segmentation](https://ieeexplore.ieee.org/document/9745758)

**Lei Zhu**, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Lizhu Ye, Anlong Ming

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>The Normalized Cut (NCut) model is a popular graph-based model for image segmentation. But it suffers from the excessive normalization problem and weakens the small object and twig segmentation. In this paper, we propose an Explored Normalized Cut (ENCut) model that establishes a balance graph model by adopting a meaningful-loop and a k-step random walk, which reduces the energy of small salient region, so as to enhance the small object segmentation. To improve the twig segmentation, our ENCut model is further enhanced by a new Random Walk Refining Term (RWRT) that adds local attention to our model with the help of an un-supervising random walk. Finally, a move-making based strategy is developed to efficiently solve the ENCut model with RWRT. Experiments on three standard datasets indicate that our model can achieve state-of-the-art results among the NCut-based segmentation models.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/zh460045050/ENCut_RWRT" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">AAAI 2022</div>
      <img src="{{ "/images/publications/tyx_aaai_2022.png" | relative_url }}" alt="TLCC">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[Transfer learning for color constancy via statistic perspective](https://ojs.aaai.org/index.php/AAAI/article/view/20135)

**Yuxiang Tang**, [Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }}), [Chunxiao Li]({{ "/people/#li-chunxiao" | relative_url }}), Zhaowen Lin, ***Anlong Ming***\*

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>Color Constancy aims to correct image color casts caused by scene illumination. Recently, although the deep learning approaches have remarkably improved on single-camera data, these models still suffer from the seriously insufficient data problem, resulting in shallow model capacity and degradation in multi-camera settings. In this paper, to alleviate this problem, we present a Transfer Learning Color Constancy (TLCC) method that leverages cross-camera RAW data and massive unlabeled sRGB data to support training. Specifically, TLCC consists of the Statistic Estimation Scheme (SE-Scheme) and Color-Guided Adaption Branch (CGA-Branch). SE-Scheme builds a statistic perspective to map the camera-related illumination labels into camera-agnostic form and produce pseudo labels for sRGB data, which greatly expands data for joint training. Then, CGA-Branch further promotes efficient transfer learning from sRGB to RAW data by extracting color information to regularize the backbone's features adaptively. Experimental results show the TLCC has overcome the data limitation and model degradation, outperforming the state-of-the-art performance on popular benchmarks. Moreover, the experiments also prove the TLCC is capable of learning new scenes information from sRGB data to improve accuracy on the RAW images with similar scenes.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/YuxiangTang/TLCC" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">IJCAI 2022</div>
      <img src="{{ "/images/publications/zzf_ijcai_2022.png" | relative_url }}" alt="DALCC">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[Domain Adversarial Learning for Color Constancy](https://www.ijcai.org/proceedings/2022/236)

**[Zhifeng Zhang]({{ "/people/#zhang-zhifeng" | relative_url }})**, [Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }}), ***Anlong Ming***\*

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>Color Constancy aims to eliminate the color cast of RAW images caused by non-neutral illuminants. Though contemporary approaches based on convolutional neural networks significantly improve illuminant estimation, they suffer from the seriously insufficient data problem. To solve this problem by effectively utilizing multi-domain data, we propose the Domain Adversarial Learning Color Constancy (DALCC) which consists of the Domain Adversarial Learning Branch (DALB) and the Feature Reweighting Module (FRM). In DALB, the Camera Domain Classifier and the feature extractor compete against each other in an adversarial way to encourage the emergence of domain-invariant features. At the same time, the Illuminant Transformation Module performs color space conversion to solve the inconsistent color space problem caused by those domain-invariant features. They collaboratively avoid model degradation of multi-device training caused by the domain discrepancy of feature distribution, which enables our DALCC to benefit from multi-domain data. Besides, to better utilize multi-domain data, we propose the FRM that reweights the feature map to suppress Non-Primary Illuminant regions, which reduces the influence of misleading illuminant information. Experiments show that the proposed DALCC can more effectively take advantage of multi-domain data and thus achieve state-of-the-art performance on commonly used benchmark datasets.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/Zhi-Feng-Zhang/DALCC" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">Neurocomputing 2022</div>
      <img src="{{ "/images/publications/lcp_neurocomputing_2021.png" | relative_url }}" alt="HDNet">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[HDNet: Hybrid distance network for semantic segmentation](https://www.sciencedirect.com/science/article/pii/S0925231221004185?via%3Dihub)

**Chunpeng Li**, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Lei Zhu, Lizhu Ye, Panhe Feng, Anlong Ming

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>Semantic segmentation is currently solved as a pixel-wise labeling task, which predicts the label of each pixel based on its features. However, current methods isolate the relations of points in a feature map and cause the discontinuous segmentation results. In order to solve this problem, we propose a Hybrid Distance Network to measure the distance from two aspects. First, the Hybrid Distance Relation is proposed to model the relations between a point and its context regions to capture contexts in a feature map by an elegant combination of positional distance and high-dimension feature distance. Then, a Location Aware Attention module is proposed to efficiently sample the contexts by the positional distance and produces sparse Hybrid Distance Relations. It synthesizes the different contexts of each point and generates position-wise attention value to compact object-level representation. During the training step, High-dimension Feature Distance loss is also presented as an auxiliary loss to compact category-level representation in feature space. Experiments show that the proposed HDNet achieves state-of-the-art performance with interpretability and efficiency on three challenging semantic segmentation benchmarks: Pascal Context, ADE20K, and COCO Stuff 10 K.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/Anstarc/HDNet" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">ICCV 2021</div>
      <img src="{{ "/images/publications/fph_iccv_2021.png" | relative_url }}" alt="MT-ORL">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[MT-ORL: Multi-task occlusion relationship learning](https://ieeexplore.ieee.org/document/9710704)

**Panhe Feng**, Qi She, Lei Zhu, Jiaxin Li, Lin ZHANG, Zijian Feng, Changhu Wang, Chunpeng Li, ***[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})***\*, Anlong Ming

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>Retrieving occlusion relation among objects in a single image is challenging due to sparsity of boundaries in image. We observe two key issues in existing works: firstly, lack of an architecture which can exploit the limited amount of coupling in the decoder stage between the two subtasks, namely occlusion boundary extraction and occlusion orientation prediction, and secondly, improper representation of occlusion orientation. In this paper, we propose a novel architecture called Occlusion-shared and Path-separated Network (OPNet), which solves the first issue by exploiting rich occlusion cues in shared high-level features and structured spatial information in task-specific low-level features. We then design a simple but effective orthogonal occlusion representation (OOR) to tackle the second issue. Our method surpasses the state-of-the-art methods by 6.1%/8.3% Boundary-AP and 6.5%/10% Orientation-AP on standard PIOD/BSDS ownership datasets. Code is available at https://github.com/fengpanhe/MT-ORL.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/fengpanhe/MT-ORL" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>


<div class="paper-box">
  <div class="paper-box-image">
    <div class="paper-image-wrap">
      <div class="badge">TIP 2020</div>
      <img src="{{ "/images/publications/zl_tip_2020.png" | relative_url }}" alt="DRW">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[Dynamic Random Walk for Superpixel Segmentation](https://ieeexplore.ieee.org/document/8967213)

**[Xuejing Kang]({{ "/people/#kang-xuejing" | relative_url }})**, Lei Zhu, ***Anlong Ming***\*

<div class="paper-actions">
  <details class="paper-abstract">
    <summary>Abstract</summary>
    <p>In this paper, we propose a novel random walk model, called Dynamic Random Walk (DRW), which adds a new type of dynamic node to the original RW model and reduces redundant calculation by limiting the walk range. To solve the seed-lacking problem of the proposed DRW, we redefine the energy function of the original RW and use the first arrival probability among each node pair to avoid the interference for each partition. Relaxation of our DRW is performed with the help of a greedy strategy and the Weighted Random Walk Entropy(WRWE) that uses the gradient feature to approximate the stationary distribution. The proposed DRW not only can enhance the boundary adherence but also can run with linear time complexity. To extend our DRW for superpixel segmentation, a seed initialization strategy is proposed. It can evenly distribute seeds in both 2D and 3D space and generate superpixels in only one iteration. The experimental results demonstrate that our DRW is faster than existing RW models and better than the state-of-the-art superpixel segmentation algorithms with respect to both efficiency and segmentation effects.</p>
  </details>
  <a class="paper-code-link" href="https://github.com/zh460045050/DRW" target="_blank" rel="noopener">code</a>
</div>

  </div>
</div>

- Add more publications here.
