import s from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <h1>404</h1>
            <div>Ничего не найдено!</div>
            <span>—ฅ/ᐠ.̫ .ᐟ\ฅ—</span>
        </div>
    );
};
