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
    <p>Abstract to be added.</p>
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
    <p>Abstract to be added.</p>
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
    <p>Abstract to be added.</p>
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
    <p>Abstract to be added.</p>
  </details>
  <span class="paper-code-link paper-code-link-disabled" title="Code link to be added">code</span>
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
    <p>Abstract to be added.</p>
  </details>
  <span class="paper-code-link paper-code-link-disabled" title="Code link to be added">code</span>
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
    <p>Abstract to be added.</p>
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
    <p>Abstract to be added.</p>
  </details>
  <span class="paper-code-link paper-code-link-disabled" title="Code link to be added">code</span>
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
    <p>Abstract to be added.</p>
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
    <p>Abstract to be added.</p>
  </details>
  <span class="paper-code-link paper-code-link-disabled" title="Code link to be added">code</span>
</div>

  </div>
</div>

- Add more publications here.
