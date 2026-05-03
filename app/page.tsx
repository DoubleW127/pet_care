const services = [
  {
    icon: "B",
    title: "基础洗护",
    text: "温和沐浴、吹干梳顺、耳道清洁、脚底毛和腹底毛修整。"
  },
  {
    icon: "C",
    title: "萌宠造型",
    text: "泰迪装、圆脸修剪、清爽短毛和按照照片参考的定制造型。"
  },
  {
    icon: "S",
    title: "皮毛护理",
    text: "深层去浮毛、护毛素护理、毛结梳理和敏感肌舒缓护理。"
  },
  {
    icon: "N",
    title: "细节护理",
    text: "修甲磨甲、清洁泪痕、护理肉垫，让日常活动更舒适。"
  }
];

const steps = [
  ["1", "到店评估", "确认皮肤、毛结、指甲和情绪状态。"],
  ["2", "温和清洁", "按毛发和皮肤情况选择洗护用品。"],
  ["3", "吹干造型", "低噪吹干，梳顺毛发并完成修剪。"],
  ["4", "交付反馈", "说明护理建议和下次洗护周期。"]
];

const prices = [
  {
    title: "小型犬洗护",
    desc: "适合 8kg 以下日常清洁",
    price: "¥88",
    items: ["洗澡吹干", "耳道清洁", "脚底毛修整"]
  },
  {
    title: "猫咪温柔洗护",
    desc: "低刺激流程，减少应激",
    price: "¥158",
    featured: true,
    items: ["独立猫咪工位", "浮毛梳理", "状态反馈"]
  },
  {
    title: "精致造型套餐",
    desc: "洗护加造型修剪",
    price: "¥198",
    items: ["基础洗护", "全身造型", "修甲磨甲"]
  }
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="泡泡爪宠物洗护店首页">
          <span className="brand-mark">P</span>
          <span>泡泡爪宠物洗护</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#process">流程</a>
          <a href="#prices">价格</a>
          <a href="#booking">预约</a>
        </nav>
        <a className="button" href="#booking">
          立即预约
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护店首屏">
          <div className="hero-content">
            <span className="eyebrow">专业洗护 · 温柔护理 · 可视化服务</span>
            <h1>让每一次洗澡，都像一次安心的小度假</h1>
            <p>
              为猫咪和狗狗提供洗澡、修毛、护爪、除浮毛和皮毛护理。独立清洁工位，全程温柔安抚，洗完香香软软回家。
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                预约到店
              </a>
              <a className="button secondary" href="#services">
                查看服务
              </a>
            </div>
          </div>
        </section>

        <div className="stats" aria-label="门店数据">
          <div className="stat">
            <strong>8+</strong>
            <span>年洗护经验</span>
          </div>
          <div className="stat">
            <strong>1v1</strong>
            <span>单宠服务工位</span>
          </div>
          <div className="stat">
            <strong>30min</strong>
            <span>基础检查反馈</span>
          </div>
        </div>

        <section id="services">
          <div className="section-head">
            <h2>从清洁到造型，一站式打理</h2>
            <p>
              按宠物体型、毛量、敏感程度定制洗护方案，适合日常清洁、换季护理和精致造型。
            </p>
          </div>
          <div className="services">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <span className="icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="process-band">
          <div className="section-head">
            <h2>标准化流程，更放心</h2>
            <p>
              每只宠物到店都会先评估状态，再进入洗护流程，减少应激，也让主人更清楚服务进度。
            </p>
          </div>
          <div className="process">
            {steps.map(([number, title, text]) => (
              <div className="step" key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="prices">
          <div className="section-head">
            <h2>清晰价格，按需选择</h2>
            <p>
              实际价格会根据体型、毛量和毛结程度调整，到店评估后确认。
            </p>
          </div>
          <div className="prices">
            {prices.map((plan) => (
              <article
                className={plan.featured ? "price featured" : "price"}
                key={plan.title}
              >
                <h3>{plan.title}</h3>
                <p>{plan.desc}</p>
                <div className="money">
                  {plan.price}
                  <small> 起</small>
                </div>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="booking">
          <div className="booking">
            <div className="booking-copy">
              <h2>今天给毛孩子约个香香澡</h2>
              <p>
                填写信息后，门店会尽快联系确认时间、宠物状态和适合的洗护方案。
              </p>
              <a className="button" href="tel:13800000000">
                电话咨询
              </a>
              <div className="contact-list">
                <span>营业时间：10:00 - 20:00</span>
                <span>门店地址：上海市宠爱路 188 号 1 层</span>
                <span>联系电话：138 0000 0000</span>
              </div>
            </div>
            <form className="form">
              <div className="field">
                <label htmlFor="name">主人姓名</label>
                <input id="name" name="name" placeholder="请输入姓名" />
              </div>
              <div className="field">
                <label htmlFor="phone">联系电话</label>
                <input id="phone" name="phone" placeholder="请输入手机号" />
              </div>
              <div className="field">
                <label htmlFor="pet">宠物类型</label>
                <select id="pet" name="pet" defaultValue="小型犬">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>猫咪</option>
                  <option>其他宠物</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="service">预约服务</label>
                <select id="service" name="service" defaultValue="基础洗护">
                  <option>基础洗护</option>
                  <option>皮毛护理</option>
                  <option>精致造型</option>
                  <option>到店评估后决定</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="note">备注</label>
                <textarea
                  id="note"
                  name="note"
                  placeholder="例如：怕吹风、皮肤敏感、毛结较多"
                />
              </div>
              <button className="button" type="button">
                提交预约
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 泡泡爪宠物洗护店</span>
        <span>专业宠物洗护 · 预约优先 · 到店评估</span>
      </footer>
    </>
  );
}
